'use client'
import { onUpdatePassword } from "@/actions/settings";
import { useToast } from "@/components/ui/use-toast";
import { ChangePasswordProps, ChangePasswordSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "next-themes"
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useThemeMode = () =>{
    const {theme, setTheme} = useTheme();
    return {
        theme,
        setTheme
    }
}

export const useChangePassword = () =>{
    const {register, handleSubmit, formState:{errors}, reset} = useForm<ChangePasswordProps>({
        resolver: zodResolver(ChangePasswordSchema),
        mode: 'onChange'
    })

    const {toast} = useToast()
    const [loading, setLoading] = useState<boolean>();

    const onChangePassword = handleSubmit(async (value)=>{
        try{
            setLoading(true)
            const updated = await onUpdatePassword(value.password)
            if(updated){
                reset()
                setLoading(false)
                toast({title: 'Success', description: updated.message})
            }

        }catch(error){
            console.log(error)
        }
    })

    return {
        register,
        errors,
        loading,
        onChangePassword
    } 
}