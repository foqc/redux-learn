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
        const { errors, book } = this.props;
        return (
            <div>
                <form>
                    <div className="form-row">
                        <TextInput
                            type="text"
                            name="title"
                            label="Title"
                            styleClass="form-group col-md-6"
                            error={errors.title}
                            value={book.title}
                            onChange={this.props.onChange} />

                        <TextInput
                            type="text"
                            name="subtitle"
                            label="Subtitle"
                            styleClass="form-group col-md-6"
                            error={errors.subtitle}
                            value={book.subtitle}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="form-row">
                        <TextInput
                            type="text"
                            name="author"
                            label="Author"
                            styleClass="form-group col-md-6"
                            error={errors.author}
                            value={book.author}
                            onChange={this.props.onChange} />

                        <TextInput
                            type="text"
                            name="published"
                            label="Published"
                            styleClass="form-group col-md-6"
                            error={errors.published}
                            value={book.published}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="form-row">
                        <TextInput
                            type="text"
                            name="publisher"
                            label="Publisher"
                            styleClass="form-group col-md-6"
                            error={errors.publisher}
                            value={book.publisher}
                            onChange={this.props.onChange} />

                        <TextInput
                            type="text"
                            name="pages"
                            label="Pages"
                            styleClass="form-group col-md-6"
                            error={errors.pages}
                            value={book.pages}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="form-row">
                        <TextInput
                            type="text"
                            name="isbn"
                            label="ISBN"
                            styleClass="form-group col-md-6"
                            error={errors.isbn}
                            value={book.isbn}
                            onChange={this.props.onChange} />

                        <TextInput
                            type="text"
                            name="cover"
                            label="Cover"
                            styleClass="form-group col-md-6"
                            error={errors.cover}
                            value={book.cover}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="form-row">
                        <TextInput
                            type="text"
                            name="website"
                            label="Website"
                            styleClass="form-group col-md-6"
                            error={errors.website}
                            value={book.website}
                            onChange={this.props.onChange} />

                        <TextInput
                            type="text"
                            name="description"
                            label="Description"
                            styleClass="form-group col-md-6"
                            error={errors.description}
                            isTextArea
                            value={book.description}
                            onChange={this.props.onChange} />
                    </div>
                    <div className="form-group">
                        {boxes}
                        <br /><div className="invalid-feedback"
                            style={{ display: errors.color_ids ? "inline" : "none" }}>
                            {errors.color_ids}</div>
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
    errors: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    colors: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onColorChange: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

export default BookForm;