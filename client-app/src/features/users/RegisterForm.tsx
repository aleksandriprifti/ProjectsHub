import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Header, Label } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";


export default observer(function RegsiterForm() {
    const { userStore } = useStore();
    return (
        <Formik
            initialValues={{ displayName: '', username: '', email: '', password: '', error: null }}
            onSubmit={(values, { setErrors }) =>
                userStore.register(values).catch(error => setErrors({ error: "Invalid creds" }))}
        >
            {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
                <Form className='ui form error' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Sign up to ProjectHub' color="teal" textAlign="center" />
                    <MyTextInput placeholder="Display Name" name='displayName' />
                    <MyTextInput placeholder="Username" name='username' />
                    <MyTextInput placeholder="Email" name='email' />
                    <MyTextInput placeholder="Password" name='password' type='password' />
                    <label>{errors.error}</label>
                    <Button
                        disabled={!isValid || !dirty}
                        positive
                        content='Register'
                        type="submit" fluid
                    />
                </Form>
            )}
        </Formik >
    )
})