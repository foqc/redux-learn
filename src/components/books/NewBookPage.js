/* eslint eqeqeq: "off" */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import BookForm from '../books/BookForm';
import Validator from 'validator';
import LoadErrorHandler from '../error/ErrorComponent';
import * as bookActions from '../../actions/bookActions';

class NewBookPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saving: false,
            book: {
                isbn: '', title: '', subtitle: '', author: '', published: '',
                publisher: '', pages: '', description: '', website: '', cover: '',
                color_ids: []
            },
            errors: {},
            loading: false
        };
        this.updateBookState = this.updateBookState.bind(this);
        this.updateBookColors = this.updateBookColors.bind(this);
        this.saveBook = this.saveBook.bind(this);
    }

    updateBookState = e =>
        this.setState({
            book: { ...this.state.book, [e.target.name]: e.target.value }
        });

    updateBookColors = e => {
        const colorId = e.target.value;
        const color = this.props.checkBoxColors.filter(color => color._id == colorId)[0];
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
        const errors = this.validate(this.state.book);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props.actions.createBook(this.state.book)
                .catch(err =>
                    this.setState({ errors: err, loading: false })
                );
        }
    }

    validate = data => {
        const errors = {};
        if (!Validator.isISBN(data.isbn)) errors.isbn = "Invalid ISBN";
        if (!data.title && data.title.length < 5) errors.title = "Title must have at least 5 characters";
        if (!data.subtitle && data.subtitle.length < 5) errors.subtitle = "Subtitle must have at least 5 characters";
        if (!data.author && data.author.length < 3) errors.author = "Author must have at least 3 characters";
        if (!Validator.isBefore(data.published)) errors.published = "Published must be a valid date";
        if (!data.publisher && data.publisher < 5) errors.publisher = "Publisher must have at least 5 characters";
        if (!Validator.isInt(data.pages)) errors.pages = "Pages must be a valid number";
        if (!data.description && data.description < 4) errors.description = "Description must have at least 4 characters";
        if (!Validator.isURL(data.website)) errors.website = "Insert a valid website";
        if (!Validator.isURL(data.cover)) errors.cover = "Insert a valid image url";
        if (data.color_ids.length==0) errors.color_ids = "Choose at least 1 book's color";
        return errors;
    };

    render() {
        const { errors, loading, book, saving } = this.state;
        return (
            <div className="col-md-8 col-md-offset-2">
                <div className="row" >
                    <div className="col-md-12">
                        <h3>New</h3>
                        <LoadErrorHandler showError={errors.global} loading={loading}>
                            <BookForm
                                book={book}
                                errors={errors}
                                colors={this.props.checkBoxColors}
                                onSave={this.saveBook}
                                onChange={this.updateBookState}
                                onColorChange={this.updateBookColors}
                                saving={saving} />
                        </LoadErrorHandler>
                    </div>
                </div>
            </div>
        );
    }
}

NewBookPage.propTypes = {
    checkBoxColors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function colorsForCheckBoxes(colors) {
    return colors.map(color => {
        color['checked'] = false;
        return color;
    });
}

function mapStateToProps(state, ownProps) {
    let checkBoxColors = [];
    if (state.colors.length > 0) {
        checkBoxColors = colorsForCheckBoxes(Object.assign([],
            state.colors));
    }

    return {
        checkBoxColors: checkBoxColors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bookActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBookPage);  