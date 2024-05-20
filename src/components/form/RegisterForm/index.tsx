import { useForm } from "react-hook-form"
import { formRegisterSchema } from "./formRegisterSchema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"
import { FromInput } from "../../Input"
import { db } from "../../../database"
import { Footer } from "../../Footer"
import { MainDivAvisos, MainDivForm, MainDivFormImg, MainSectionForm } from "../../../styles/body"
import bg from "../../../../public/renditions/image-1366-768.png"

export const RegisterForm = () => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<z.infer<typeof formRegisterSchema>>({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    const submit = async (values: z.infer<typeof formRegisterSchema>) => {
        if (db.findUser(values.email)) {
            return "Email já registrado."
        }
        db.addUser(values.name, values.email, values.password)
        console.log(db)
        navigate("/login")
        return "Usuário cadastrado;"
    }

    return (
        <>
            <MainSectionForm>
                <MainDivForm>
                    <form onSubmit={handleSubmit(submit)} >
                        <div>
                            <FromInput
                                id="name"
                                type="text"
                                {...register("name")}
                                placeholder="Nome"
                            />
                            <FromInput
                                id="email"
                                type="email"
                                {...register("email")}
                                placeholder="E-mail"
                            />
                            <FromInput
                                id="password"
                                type="password"
                                {...register("password")}
                                placeholder="Senha"
                            />
                            <FromInput
                                id="confirmPassword"
                                type="password"
                                {...register("confirmPassword")}
                                placeholder="Confirme sua senha"
                            />
                        </div>
                        <button type="submit">
                            Cadastrar
                        </button>
                    </form>
                    
                    <MainDivAvisos>
                        <p>Caso já seja cadastrado, faça seu login:</p>
                        <button><Link to="/login">Logar</Link></button>
                    </MainDivAvisos>
                </MainDivForm>
                <MainDivFormImg $image={bg} />
            </MainSectionForm>
            <Footer />
        </>
    )
}