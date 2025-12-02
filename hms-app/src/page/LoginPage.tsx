import {useState} from "react";
import {Form, Button, Container, Alert} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import logo from "../logo.png";

export const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const success = true;
            if (success) {
                navigate("/home");
            } else {
                setError("Nieprawidłowy email lub hasło.");
            }
        } catch (err) {
            console.error(err);
            setError("Wystąpił błąd podczas logowania.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            width: "100hv",
            height: "94vh",
            backgroundImage: `url(${logo})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
            <div className="login-page" style={{height: "100%", paddingTop: "7%"}}>

                <Container className="d-flex justify-content-center align-items-center" style={{height: "90%"}}>
                    <Form onSubmit={handleLogin} className="login-form p-4 rounded shadow"
                          style={{width: "400px", backgroundColor: "white"}}>
                        <h3 className="mb-4 text-center">Zaloguj się</h3>

                        {error && <Alert variant="danger">{error}</Alert>}

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Wpisz email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Wpisz hasło"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <div className="d-grid">
                            <Button type="submit" variant="primary" disabled={loading}>
                                {loading ? "Logowanie..." : "Zaloguj"}
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default LoginPage;