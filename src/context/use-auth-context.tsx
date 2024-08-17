"use client"
import React, { useState } from "react";

type InitialValueProps  = {
    currentStep: number,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const InitialValues:InitialValueProps = {
    currentStep :1,
    setCurrentStep: () =>undefined
}

const authContaxt = React.createContext(InitialValues);

const {Provider} = authContaxt; 

export const AuthContaxtProvider = ({children}: {children: React.ReactNode}) =>{
    const [currentStep, setCurrentStep] = useState<number>(InitialValues.currentStep);
    const value = {
        currentStep,
        setCurrentStep
    }

    return <Provider value={value}>{children}</Provider>
}

export const useAuthContextHook = () => {
    const state = React.useContext(authContaxt);
    return state;
}