import { ErrorMessage, Field, Form, Formik } from "formik"


const LoginForm = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
        >
            {/* {{ handleSubmit } => {
                <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                    <Field type="email" name="email" placeholder="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            }} */}
        </Formik>
    )
}

export default LoginForm