import { Link, useNavigate } from "react-router-dom"
import { db } from "../../../database"
import { FromInput } from "../../Input"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLoginSchema } from "./FormLoginSchema";
import { z } from "zod";
import { Footer } from "../../Footer";
import bg from "../../../../public/renditions/image-1366-768.png"
import { MainDivAvisos, MainDivForm, MainDivFormImg, MainSectionForm } from "../../../styles/body";


export const FormLogin = () => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(FormLoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const login = (values: z.infer<typeof FormLoginSchema>) => {
        const userInfo = values
        const user = db.findUser(userInfo.email)

        if (!user) {
            return "Usuário não cadastrado."
        }
        if (user.password !== userInfo.password) {
            return 'Email ou senha incorreto';
        }
        localStorage.setItem("@MARVEL", values.email);
        navigate("/personagens")
        return 'Sucesso';
    }





    return (
        <>
            <MainSectionForm>
                <MainDivForm>

                    <div>
                        <form onSubmit={handleSubmit(login)}>
                            <div>
                                <FromInput type="text"
                                    {...register("email")}
                                    placeholder="Email"
                                />
                                <FromInput id="password"
                                    type="password"
                                    {...register("password")}
                                    placeholder="Senha"
                                />
                            </div>
                            <button type="submit">Entrar</button>
                        </form>
                        
                        <MainDivAvisos>
                            <p>Caso ainda não seja cadastrado</p>
                            <button><Link to="/">Cadastre-se</Link></button>
                        </MainDivAvisos>
                    </div>
                </MainDivForm>
                <MainDivFormImg $image={bg} />
            </MainSectionForm>
            <Footer />
        </>
    )
}