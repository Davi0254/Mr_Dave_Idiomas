// middleware/checkCourseAccess.js

const allowedUsers = {
    "curso1": ["user1@email.com", "user2@email.com"],
    "curso2": ["user3@email.com"],
    "curso3": ["user4@email.com", "user5@email.com"],
};

function checkCourseAccess(courseName) {
    return (req, res, next) => {
        const user = req.user; // Supondo que o user já esteja autenticado e armazenado no req.user

        if (!user) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }

        const { email } = user;
        if (allowedUsers[courseName] && allowedUsers[courseName].includes(email)) {
            return next(); // Acesso permitido
        }

        return res.status(403).json({ error: "Acesso negado a este curso" });
    };
}

module.exports = checkCourseAccess;
