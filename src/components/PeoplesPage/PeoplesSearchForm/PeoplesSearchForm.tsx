import {Field, Form, Formik, FormikHelpers, FormikValues} from "formik";
import React from "react";
// @ts-ignore
import s from './PeoplesSearchForm.module.css';

type MyFormValuesType = {
    term: string;
}

type PropsType = {
    onFilterChanged: (term: string) => void
}

const PeoplesSearchForm:React.FC<PropsType> = ({onFilterChanged}) => {

    const initialValues: MyFormValuesType = {term: ''};

    const onSubmitFormik = (values: FormikValues, actions: FormikHelpers<MyFormValuesType>) => {
        onFilterChanged(values.term);
        values.term = '';
        actions.setSubmitting(false);
    }

    return (
        <div className={s.search_form_item}>
            <hr/>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    onSubmitFormik(values, actions)
                }}
            >
                {({isSubmitting}) => (
                    <Form className={s.search_form_item_form}>
                        <Field type="text" name="term" placeholder="Search other peoples"/>
                        <button type="submit" disabled={isSubmitting}>Find</button>
                    </Form>
                )}
            </Formik>
            <hr/>
        </div>
    );
}

export default PeoplesSearchForm;