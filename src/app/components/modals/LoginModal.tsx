"use client";
import useLoginModal from "@/hooks/useLoginModal";
import React from "react";
import Input from "../forms/input";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Iamge from "next/image";
import Button from "../forms/Button";
import { AiOutlineMail, AiOutlineQrcode } from "react-icons/ai";
import { IoPhonePortraitOutline } from "react-icons/io5";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  let bodyConent = (
    <>
      <div className="flex justify-center my-4">
        <Iamge src={"/svg/logo.svg"} alt="logo" width={145} height={45} />
      </div>
      <div className="flex flex-col gap-4">
        <Input
          id="email"
          label="手机号"
          register={register}
          errors={errors}
          placeholder="手机号"
          required
        />
        <Input
          id="password"
          label="密码"
          register={register}
          errors={errors}
          placeholder="密码"
          required
        />
        <Button label="登录" />
      </div>
    </>
  );

  const footer = (
    <div className="flex flex-col gap-4">
      <Button label="手机号登录" icon={IoPhonePortraitOutline} />
      <Button label="邮箱登录" icon={AiOutlineMail} outline />
      <Button label="二维码登录" icon={AiOutlineQrcode} outline />
    </div>
  );
  return (
    <Modal
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      actionLabel={"1"}
      body={bodyConent}
      footer={footer}
      title="登录"
    />
  );
};

export default LoginModal;
