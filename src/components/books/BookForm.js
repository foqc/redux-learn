import React from 'react';
import PropTypes from "prop-types";
import TextInput from '../../common/TextInput';
import CheckBox from '../../common/CheckBox';

class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.makeCheckBoxes = this.makeCheckBoxes.bind(this);
    }

    makeCheckBoxes() {
        return this.props.colors.map(color => {
            return (
                <CheckBox
                    item={color}
                    styleClass="form-check form-check-inline"
                    handleChange={this.props.onColorChange}
                    key={color._id} />
            );
        });
    }

    render() {
        const boxes = this.makeCheckBoxes();
        return (
            <div>
                <form>
                    <div className="form-row">
                        <TextInput
                            type="text"
                            name="title"
                            label="title"
                            styleClass="form-group col-md-6"
                            value={this.props.book.title}
                            onChange={this.props.onChange} />

                        <TextInput
                            type="text"
                            name="subtitle"
                            label="subtitle"
                            styleClass="form-group col-md-6"
                            value={this.props.book.subtitle}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="form-row">
                        <TextInput
                            type="text"
                            name="author"
                            label="author"
                            styleClass="form-group col-md-6"
                            value={this.props.book.author}
                            onChange={this.props.onChange} />

                        <TextInput
                            type="text"
                            name="published"
                            label="published"
                            styleClass="form-group col-md-6"
                            value={this.props.book.published}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="form-row">
                        <TextInput
                            type="text"
                            name="publisher"
                            label="publisher"
                            styleClass="form-group col-md-6"
                            value={this.props.book.publisher}
                            onChange={this.props.onChange} />

                        <TextInput
                            type="text"
                            name="pages"
                            label="pages"
                            styleClass="form-group col-md-6"
                            value={this.props.book.pages}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="form-row">
                        <TextInput
                            type="text"
                            name="isbn"
                            label="isbn"
                            styleClass="form-group col-md-6"
                            value={this.props.book.isbn}
                            onChange={this.props.onChange} />

                        <TextInput
                            type="text"
                            name="cover"
                            label="cover"
                            styleClass="form-group col-md-6"
                            value={this.props.book.cover}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="form-row">
                        <TextInput
                            type="text"
                            name="website"
                            label="website"
                            styleClass="form-group col-md-6"
                            value={this.props.book.website}
                            onChange={this.props.onChange} />

                        <TextInput
                            type="text"
                            name="description"
                            label="description"
                            styleClass="form-group col-md-6"
                            isTextArea
                            value={this.props.book.description}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="form-group">
                        {boxes}
                    </div>
                    <button
                        type="submit"
                        disabled={this.props.saving}
                        className="btn btn-primary"
                        onClick={this.props.onSave} >{this.props.saving ? 'Saving...' : 'Save'}</button>
                </form>
            </div>
        );
    }
}

BookForm.propTypes = {
    book: PropTypes.object.isRequired,
    colors: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onColorChange: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

export default BookForm;