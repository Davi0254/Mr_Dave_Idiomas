const handleRegister = async (e, {registerForm, setRegisterForm, setError, setMessage}) => {
    e.preventDefault();

    const { nome_completo, email, senha } = registerForm || {};

    if (!nome_completo?.trim() || !email?.trim() || !senha?.trim()) {
        setError("todos os campos são necessários");
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/register", {
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
        console.error("Error ao registrar usuário:", error);
        setError("Erro ao registrar aluno");
    }
};

export default handleRegister;