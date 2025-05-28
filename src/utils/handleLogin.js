const handleLogin = async (
    e,
    { loginForm, setLoginForm, login, setError, setMessage }
) => {
    e.preventDefault();

    const { email, senha } = loginForm || {};

    if (!email?.trim() || !senha?.trim()) {
        setError("todos os campos são necessários");
        return;
    }

// Remorte server url: https://mr-dave-plataforma.onrender.com

    try {
        const response = await fetch("https://mr-dave-plataforma.onrender.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                senha
            }),
        });

        const data = await response.json();

        if (response.ok) {
            const newLoginForm = {
                email: data.email,
                senha: data.senha,
            }
            setLoginForm((prev) => ({ ...prev, ...newLoginForm, }));
            setMessage(data.message)
            login(data.token);

        } else {
            setError(data.error || "Falha no login");
        }
    } catch (error) {
        console.error("Erro interno do servidor:", error);
        setError("Erro interno do servidor");
    }
};

export default handleLogin;             