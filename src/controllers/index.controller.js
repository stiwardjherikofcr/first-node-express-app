export const indexController = (req, res) => {
    res.render("index", { title: "First Web Node" });
};

export const aboutController = (req, res) => {
    res.render("about", { title: "About First Node Website" });
};

export const contactController = (req, res) => {
    res.render("contact", { title: "Contact Page" });
};
