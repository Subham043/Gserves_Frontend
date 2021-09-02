import React, { useEffect, useState } from 'react'
import './MainServiceForm.css';
import { Container } from 'react-bootstrap'
import { useHistory, useParams, Link } from 'react-router-dom'

const MainServiceForm = () => {

    const history = useHistory();
    const [formField, setFormField] = useState([
        {id:1, field_name:"email", dispaly_name:"email", field_column_name:"email", field_type:"email" },
        {id:2, field_name:"Address", dispaly_name:"Address", field_column_name:"Address", field_type:"description" },
        {id:3, field_name:"name", dispaly_name:"name", field_column_name:"name", field_type:"text" },
        {id:4, field_name:"mobile", dispaly_name:"mobile", field_column_name:"mobile", field_type:"mobile" },
        {id:5, field_name:"date", dispaly_name:"date", field_column_name:"date", field_type:"date" },
        {id:6, field_name:"file", dispaly_name:"file", field_column_name:"file", field_type:"attatchment" },
    ])
    const [inputField, setInputField] = useState({})
    const [errorMessage, setErrorMessage] = useState("")
    const [error, setError] = useState(false)
    const formData = new FormData()

    const saveHandler = () => {
        for (var key in inputField) {
            formData.append(key, inputField[key])
        }
        history.push('/success')
    }

    const handleChange = (e, input_column, input_type) => {
        let values = { ...inputField };
        if (input_type === "attatchment") {
            values[input_column] = e.target.files[0];
            setInputField(values);
        } else {
            values[input_column] = e.target.value;
            setInputField(values);
        }

    }


    return (
        <div className="main__service__form__outer__div">
            <Container>
                <div className="main__service__form__inner__div">
                    <form encType="multipart/form-data">
                        <div className="form__outer_div">
                            <div className="heading__ref__id">
                                <p>Ref ID: 1234567890 - <span>000</span></p>
                            </div>
                            <div className="form__main">
                                <div className="row">
                                    {error === true ?
                                        <div className="col-xl-12 col-lg-12 col-sm-12 mb-2 form__row">
                                            <div style={{ color: "red", textAlign: "center" }}>{errorMessage}</div>
                                        </div>
                                        :
                                        null
                                    }
                                    {
                                        formField.map((item, index) => {
                                            if (item.field_type === "email") {
                                                return (
                                                    <div key={index} className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 form__email">
                                                        <div className="row" style={{ alignItems: 'center' }}>
                                                            <div className="col-2">
                                                                <label>{item.display_name} :</label>
                                                            </div>
                                                            <div className="col-10">
                                                                <input type="text" onChange={(e) => handleChange(e, item.field_column_name, item.field_type)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            } else if (item.field_type === "text") {
                                                return (
                                                    <div key={index} className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 form__text">
                                                        <div className="row" style={{ alignItems: 'center' }}>
                                                            <div className="col-2">
                                                                <label>{item.field_name} :</label>
                                                            </div>
                                                            <div className="col-10">
                                                                <input type="text" onChange={(e) => handleChange(e, item.field_column_name, item.field_type)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            } else if (item.field_type === "number") {
                                                return (
                                                    <div key={index} className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 form__number">
                                                        <div className="row" style={{ alignItems: 'center' }}>
                                                            <div className="col-2">
                                                                <label>{item.field_name} :</label>
                                                            </div>
                                                            <div className="col-10">
                                                                <input type="text" onChange={(e) => handleChange(e, item.field_column_name, item.field_type)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            } else if (item.field_type === "mobile") {
                                                return (
                                                    <div key={index} className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 form__mobile">
                                                        <div className="row" style={{ alignItems: 'center' }}>
                                                            <div className="col-2">
                                                                <label>{item.field_name} :</label>
                                                            </div>
                                                            <div className="col-10">
                                                                <input type="text" onChange={(e) => handleChange(e, item.field_column_name, item.field_type)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            } else if (item.field_type === "date") {
                                                return (
                                                    <div key={index} className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 form__date">
                                                        <div className="row" style={{ alignItems: 'center' }}>
                                                            <div className="col-2">
                                                                <label>{item.field_name} :</label>
                                                            </div>
                                                            <div className="col-10">
                                                                <input type="date" onChange={(e) => handleChange(e, item.field_column_name, item.field_type)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            } else if (item.field_type === "attatchment") {
                                                return (
                                                    <div key={index} className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 form__attatchment">
                                                        <div className="row" style={{ alignItems: 'center' }}>
                                                            <div className="col-2">
                                                                <label>{item.field_name} :</label>
                                                            </div>
                                                            <div className="col-10">
                                                                <input type="file" onChange={(e) => handleChange(e, item.field_column_name, item.field_type)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            } else if (item.field_type === "description") {
                                                return (
                                                    <div key={index} className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2 form__description">
                                                        <div className="row" style={{ alignItems: 'center' }}>
                                                            <div className="col-2">
                                                                <label>{item.field_name} :</label>
                                                            </div>
                                                            <div className="col-10">
                                                                <textarea onChange={(e) => handleChange(e, item.field_column_name, item.field_type)}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        }
                                        )
                                    }







                                </div>
                            </div>
                        </div>
                        <div className="form__outer__btn_div">
                            <button className="save__btn__service__form" onClick={saveHandler} type="button">Save</button>
                            <button className="submit__btn__service__form" onClick={saveHandler} type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default MainServiceForm
