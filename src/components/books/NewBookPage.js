/* eslint eqeqeq: "off" */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import BookForm from '../books/BookForm';
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
            }
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
        this.props.actions.createBook(this.state.book);
    }

    render() {
        return (
            <div className="col-md-8 col-md-offset-2">
                <div className="row" >
                    <div className="col-md-12">
                        <h3>New</h3>
                        <BookForm
                            book={this.state.book}
                            colors={this.props.checkBoxColors}
                            onSave={this.saveBook}
                            onChange={this.updateBookState}
                            onColorChange={this.updateBookColors}
                            saving={this.state.saving} />
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