/* eslint eqeqeq: "off" */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import ColorList from '../books/ColorList';
import BookForm from '../books/BookForm';
import * as bookActions from '../../actions/bookActions';
import LoadErrorHandler from '../error/ErrorComponent';
import { createErrorSelector, createLoadingSelector } from '../../actions/selectors';
import isEmpty from '../../util/util';

class BookPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            saving: false,
            book: this.props.book,
            bookColors: this.props.bookColors,
            checkBoxColors: this.props.checkBoxColors
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.updateBookState = this.updateBookState.bind(this);
        this.updateBookColors = this.updateBookColors.bind(this);
        this.saveBook = this.saveBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.book._id != nextProps.book._id) {
            this.setState({ book: nextProps.book });
        }
        if (this.props.checkBoxColors.length < nextProps.checkBoxColors.length) {
            this.setState({ bookColors: nextProps.bookColors, checkBoxColors: nextProps.checkBoxColors });
        }

        this.setState({ saving: false, isEditing: false });
    }

    toggleEdit() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    updateBookState = e =>
        this.setState({
            book: { ...this.state.book, [e.target.name]: e.target.value }
        });

    updateBookColors = e => {
        const colorId = e.target.value;
        const color = this.state.checkBoxColors.filter(color => color._id == colorId)[0];
        const checked = !color.checked;
        color['checked'] = checked;
        if (checked) {
            this.setState({
                book: {
                    ...this.state.book,
                    "color_ids": [...this.state.book.color_ids, color._id]
                }
            });
        } else {
            this.setState({
                book: {
                    ...this.state.book,
                    "color_ids":
                        [...this.state.book.color_ids.filter(item => item != color._id)]
                }
            });
        }
    }

    saveBook(event) {
        event.preventDefault();
        this.props.actions.updateBook(this.state.book);
    }

    deleteBook(event) {
        this.props.actions.deleteBook(this.state.book);
    }


    render() {
        //console.log(this.state.book)
        if (!this.state.book._id) {
            return (
                <div className="col-md-8">
                    <LoadErrorHandler showError={this.props.error} loading={this.props.loading}>
                        <div className="alert alert-info" role="alert">
                            There is not a book with this ID!
                        </div>
                    </LoadErrorHandler>
                </div>
            );
        }
        if (this.state.isEditing) {
            return (
                <div className="col-md-8 col-md-offset-2">
                    <div className="row" >
                        <div className="col-md-12">
                            <h3>Edit</h3>
                            <BookForm
                                book={this.state.book}
                                colors={this.state.checkBoxColors}
                                onSave={this.saveBook}
                                onChange={this.updateBookState}
                                onColorChange={this.updateBookColors}
                                saving={this.state.saving} />
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="col-md-8 col-md-offset-2">
                <LoadErrorHandler showError={this.props.error} loading={this.props.loading}>
                    <div className="row" >
                        <div className="col-md-8">
                            <h3>Details</h3>
                            <h5>{this.props.book.title}</h5>
                            <p>Subtitle: {this.props.book.subtitle}</p>
                            <p>Author: {this.props.book.author}</p>
                            <p>Published: {this.props.book.published}</p>
                            <div className="txtn">
                                <ColorList colors={this.props.bookColors} />
                            </div>
                            <button className="btn btn-success" onClick={this.toggleEdit}>Edit</button>{" "}
                            <button className="btn btn-danger" onClick={this.deleteBook}>Delete</button>
                        </div>
                        <div className="col-md-4"><div className="text-center">
                            <img src={this.props.book.cover} className="rounded"
                                alt={this.props.book.subtitle} width="200" height="300" />
                        </div>
                        </div>
                    </div>
                </LoadErrorHandler>
            </div>
        );
    }
}

BookPage.propTypes = {
    book: PropTypes.object.isRequired,
    bookColors: PropTypes.array.isRequired,
    checkBoxColors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

function colorsForCheckBoxes(colors, book = null) {
    return colors.map(color => {
        if (book && book.color_ids.filter(colorId => colorId == color._id).length > 0) {
            color['checked'] = true;
        } else {
            color['checked'] = false;
        }
        return color;
    });
}

function collectBookColors(colors, book) {
    let selected = colors.map(color => {
        let colorChoose;
        if (book.color_ids.filter(colorId => colorId == color._id).length > 0) {
            colorChoose = color;
        }
        return colorChoose;
    });

    return selected.filter(el => el != undefined);
}

function getBookById(books, id) {
    let book = Object.assign({}, books.find(book => book._id == id));
    return book;
}

const errorSelector = createErrorSelector(['LOAD_BOOKS', 'LOAD_COLORS']);
const loadingSelector = createLoadingSelector(['LOAD_BOOKS', 'LOAD_COLORS']);

function mapStateToProps(state, ownProps) {
    let book = {
        isbn: '', title: '', subtitle: '', author: '', published: '',
        publisher: '', pages: '', description: '', website: '', cover: '',
        color_ids: []
    };
    const stateColors = Object.assign([], state.colors);
    let bookColors = [];
    let checkBoxColors = [];
    const bookId = ownProps.match.params.id;
    if (bookId && state.books.length > 0 && state.colors.length > 0) {
        book = getBookById(state.books, bookId);
        if (!isEmpty(book)) {
            if (book._id && book.color_ids.length > 0) {
                checkBoxColors = colorsForCheckBoxes(stateColors, book);
                bookColors = collectBookColors(stateColors, book);
            } else {
                checkBoxColors = colorsForCheckBoxes(stateColors, book);
            }
        }
    }
    return {
        book: book, checkBoxColors: checkBoxColors, bookColors: bookColors,
        error: errorSelector(state),
        loading: loadingSelector(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bookActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);  