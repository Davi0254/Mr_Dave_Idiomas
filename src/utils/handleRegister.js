const handleRegister = async (e, {registerForm, setRegisterForm, setError, setMessage}) => {
    e.preventDefault();

    const { nome_completo, email, senha } = registerForm || {};

    if (!nome_completo?.trim() || !email?.trim() || !senha?.trim()) {
        setError("todos os campos são necessários");
        return;
    }

    try {
        const response = await fetch("https://mr-dave-plataforma.onrender.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome_completo,
                email,
                senha
            }),
        });

        const data = await response.json();

        if (response.ok) {
            const newRegisterForm = {
                nome_completo: data.nome_completo,
                email: data.email,
                senha: data.senha,
            }
            setRegisterForm((prev) => ({ ...prev, ...newRegisterForm, }));
            setMessage(data.message)
        } else {
            setError(data.error || "Falha ao fazer login");
        }
    } catch (error) {
        console.error("Erro ao registrar usuário:", error);
        setError("Erro ao registrar usuário");
    }
};

export default handleRegister;