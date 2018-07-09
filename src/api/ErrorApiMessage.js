export default (error = null) => {
    if (error) {
        return error.response.data.errors ||
            { global: error.message + " " + error.response.data.url };
    } else {
        return { global: "Error message NULL" };
    }
};