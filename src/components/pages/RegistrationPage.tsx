import { Button } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import { useRegister } from "../../hooks/useRegister";
import { FormikTextInput } from "../forms/FormikTextInput";
import * as Yup from "yup";

export const RegistrationPage = () => {
  const { register } = useRegister();
  const navigate = useNavigate();
  const notifications = useNotifications();

  return <div>
    <h1>Register</h1>
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required")
      })}
      onSubmit={values => {
        register(values.username, values.password).then(() => {
          navigate("/");
        }).catch(error => {
          notifications.showNotification({
            title: "Error",
            color: "red",
            message: String(error.response.data)
          });
        });
      }}>
      {() => <Form>
        <FormikTextInput name="username" label="Username" />
        <FormikTextInput name="password" label="Password" type="password" mt={15} />
        <Button mt={20} type="submit">Register</Button>
      </Form>}
    </Formik>
  </div>;
};