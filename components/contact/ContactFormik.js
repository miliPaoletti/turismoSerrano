import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import registerForm from "services/sendEmail";
import ItemContact from "components/contact/ItemContact";
import NotificationContext from "context/NotificationContext";
import { FAIL } from "components/utils/constants";
import { SUCCESS } from "components/utils/constants";
import { LOADING } from "components/utils/constants";
import { MEDIUM_CARD } from "components/utils/constants";
import { INFO_NOT_UPLOADED } from "components/utils/constants";
import { FORM } from "components/utils/constants";
import { INFO_WHATSAPP } from "components/utils/constants";
import { URL_WHATSAPP } from "components/utils/constants";
import { FORM_DATA } from "components/utils/constants";

import Whatsapp from "components/ui/Links/Whatsapp";
import Link from "next/link";
import {
  CLICK_SEND_BUTTON,
  CLICK_WHATSAPP_BUTTON_CONTANT_MODAL,
} from "components/tracker/constants";
import { useTracker } from "components/tracker/useTracker";

function validateEmail(value) {
  let error;
  if (!value) {
    error = FORM_DATA.validations.emailRequired;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = FORM_DATA.validations.emailInvalid;
  }
  return error;
}

function validateName(value) {
  let error;
  if (!value) {
    error = FORM_DATA.validations.nameRequired;
  }
  return error;
}

function validateConsult(value) {
  let error;
  if (!value) {
    error = FORM_DATA.validations.consultRequired;
  }
  return error;
}

const initialValues = {
  name: "",
  phoneNumber: "",
  passengers: "",
  email: "",
  consult: "",
};

export default function ContactForm({ setIsOpen, dataForConsult, section }) {
  const { setNotification } = useContext(NotificationContext);

  const { handlePreClickAction: clickSend } = useTracker(CLICK_SEND_BUTTON);
  const { handlePreClickAction: clickWsp } = useTracker(
    CLICK_WHATSAPP_BUTTON_CONTANT_MODAL
  );
  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => {
          setIsOpen(false);
          setNotification(LOADING);

          return registerForm(values, dataForConsult)
            .then(() => {
              setNotification(SUCCESS);
              clickSend({ status: "success" });
            })
            .catch((e) => {
              setNotification(FAIL);
              clickSend({ status: "fail", error: e });
              console.log(e);
            });
        }}
      >
        {({ errors, isSubmitting, touched }) => (
          <Form className="form space-y-3 my-7">
            <div className="text-center text-2xl font-medium">
              {FORM_DATA.title}
            </div>
            {section === MEDIUM_CARD && <div>{INFO_NOT_UPLOADED}</div>}
            <ItemContact
              text={
                <Field
                  className={errors.name ? "error" : ""}
                  name="name"
                  placeholder={`${FORM_DATA.name} * `}
                  validate={validateName}
                />
              }
              error={
                errors.name &&
                touched.name && (
                  <small className="form-error">{errors.name}</small>
                )
              }
            />

            <ItemContact
              text={
                <Field
                  className={errors.phoneNumber ? "error" : ""}
                  name="phoneNumber"
                  placeholder={`${FORM_DATA.phone} `}
                  type="text"
                />
              }
            />

            <ItemContact
              text={
                <Field
                  className={errors.passengers ? "error" : ""}
                  name="passengers"
                  placeholder={`${FORM_DATA.passengers} `}
                  type="number"
                />
              }
            />

            <ItemContact
              text={
                <Field
                  className={errors.email ? "error" : ""}
                  name="email"
                  placeholder={`${FORM_DATA.email} * `}
                  type="text"
                  validate={validateEmail}
                />
              }
              error={
                errors.email &&
                touched.email && (
                  <small className="form-error">{errors.email}</small>
                )
              }
            />
            <div className="">
              <div className="flex items-top ">
                <Field
                  className={errors.consult ? "error text-lg" : "text-lg"}
                  name="consult"
                  placeholder={`${FORM_DATA.consult} * `}
                  type="text"
                  as="textarea"
                  rows="4"
                  validate={validateConsult}
                />{" "}
              </div>
              {errors.consult && touched.consult && (
                <small className="form-error">{errors.consult}</small>
              )}
            </div>

            <button
              type="submit"
              className="button-primary w-full"
              disabled={isSubmitting}
            >
              {FORM_DATA.send}
            </button>

            <div className="flex items-center text-left space-x-3 ">
              <Link href={URL_WHATSAPP}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  onClick={() => {
                    clickWsp();
                  }}
                >
                  <p className="text-base">{INFO_WHATSAPP}</p>
                </a>
              </Link>
              <Whatsapp
                page={FORM}
                onClick={() => {
                  clickWsp();
                }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
