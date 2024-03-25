import React, { Component } from 'react';
import "../../styles/Register.scss"
import { Link } from "react-router-dom"

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            emailError: '',
            passwordError: '',
            passwordConfirmError: '',
        };
    }

    handleInputFocus = (event) => {
        const input = event.target;
        const icon = input.parentElement.querySelector(".icon");
        const iconInput = input.parentElement.querySelector(".icon_input");
        icon.classList.add("icon_focus");
        iconInput.classList.add("box_icon_focus");
    };

    handleInputBlur = (event) => {
        const input = event.target;
        const icon = input.parentElement.querySelector(".icon");
        const iconInput = input.parentElement.querySelector(".icon_input");
        icon.classList.remove("icon_focus");
        iconInput.classList.remove("box_icon_focus");
    };

    checkEmail = () => {
        const { email } = this.state;
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!regex.test(email)) {
            this.setState({ emailError: 'Email sai định dạng' });
            return false;
        }

        this.setState({ emailError: 'sssssss' });
        return true;
    };

    checkPassword = () => {
        const { password } = this.state;
        const regex = /^.{8,}$/;

        if (!regex.test(password)) {
            this.setState({ passwordError: 'Password sai định dạng' });
            return false;
        }

        this.setState({ passwordError: '' });
        return true;
    };


    handleSubmit = (e) => {
        e.preventDefault();
        if (this.checkEmail() && this.checkPassword()) {

            alert('Thành công');
        }
    };



    render() {
        return (
            <div className='register'>
                <form className="form_register" onSubmit={this.handleSubmit}>
                    <h1 className="title_register">REGISTER</h1>
                    <div className='stage_register'>
                        <div className="box_input">
                            <div className="line_input">
                                <label htmlFor="firstname">First Name:</label>
                                <div className="input_box">
                                    <span className="icon_input">
                                        <i className="fa-solid fa-user icon"></i>
                                    </span>
                                    <input
                                        className="input"
                                        name="firstname"
                                        type="text"
                                        placeholder="firstname"
                                        required
                                        maxLength="15"
                                        onFocus={this.handleInputFocus}
                                        onBlur={this.handleInputBlur}
                                    />
                                </div>
                            </div>
                            <p className="error">{this.state.emailError}</p>
                        </div>
                        <div className="box_input">
                            <div className="line_input">
                                <label htmlFor="lastname">Last Name:</label>
                                <div className="input_box">
                                    <span className="icon_input">
                                        <i className="fa-solid fa-user icon"></i>
                                    </span>
                                    <input
                                        className="input"
                                        name="lastname"
                                        type="text"
                                        placeholder="lastname"
                                        required
                                        maxLength="15"
                                        onFocus={this.handleInputFocus}
                                        onBlur={this.handleInputBlur}
                                    />
                                </div>
                            </div>
                            <p className="error">{this.state.emailError}</p>
                        </div>
                    </div>
                    <div className='stage_register'>
                        <div className="box_input">
                            <div className="line_input">
                                <label htmlFor="username">User Name:</label>
                                <div className="input_box">
                                    <span className="icon_input">
                                        <i className="fa-solid fa-user icon"></i>
                                    </span>
                                    <input
                                        className="input"
                                        name="username"
                                        type="text"
                                        placeholder="username"
                                        required
                                        maxLength="15"
                                        onFocus={this.handleInputFocus}
                                        onBlur={this.handleInputBlur}
                                    />
                                </div>
                            </div>
                            <p className="error">{this.state.emailError}</p>
                        </div>

                        <div className="box_input">
                            <div className="line_input">
                                <label htmlFor="password">Password:</label>
                                <div className="input_box">
                                    <span className="icon_input">
                                        <i className="fa-solid fa-lock icon"></i>
                                    </span>
                                    <input
                                        className="input"
                                        id="pass"
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                        required
                                        onInput={this.checkPassword}
                                        onFocus={this.handleInputFocus}
                                        onBlur={this.handleInputBlur}
                                    />
                                </div>
                            </div>
                            <p className="error errorpass">{this.state.passwordError}</p>
                        </div>

                    </div>
                    <div className='stage_register'>
                        <div class="box_input">
                            <div class="line_input">
                                <label for>CCCD:</label>
                                <div class="input_box">
                                    <span class="icon_input"><i class="fa-solid fa-location-dot icon"></i></span>
                                    <input class="input" name="cccd" type="number" placeholder="cccd" required onFocus={this.handleInputFocus}
                                        onBlur={this.handleInputBlur}
                                    />
                                </div>
                            </div>
                            <p class="error"></p>

                        </div>
                        <div class="box_input">
                            <div class="line_input">
                                <label for>Birth day:</label>
                                <div class="input_box">
                                    <span class="icon_input"><i class="fa-solid fa-cake-candles icon"></i></span>
                                    <input class="input" name="dob" type="date" required onFocus={this.handleInputFocus}
                                        onBlur={this.handleInputBlur} />
                                </div>
                            </div>
                            <p class="error"></p>
                        </div>
                    </div>
                    <div className='stage_register'>
                        <div class="box_input">
                            <div class="line_input">
                                <label for>City</label>
                                <div class="input_box">
                                    <span class="icon_input"><i class="fa-solid fa-location-dot icon"></i></span>
                                    <input class="input" name="city" type="text" placeholder="city" required onFocus={this.handleInputFocus}
                                        onBlur={this.handleInputBlur} />
                                </div>
                            </div>
                            <p class="error"></p>
                        </div>
                        <div class="box_input">
                            <div class="line_input">
                                <label for>Address</label>
                                <div class="input_box">
                                    <span class="icon_input"><i class="fa-solid fa-location-dot icon"></i></span>
                                    <input class="input" name="address" type="text" placeholder="address" required onFocus={this.handleInputFocus}
                                        onBlur={this.handleInputBlur} />
                                </div>
                            </div>
                            <p class="error"></p>
                        </div>
                    </div>


                    <div className='stage_register'>
                        <div className="box_input">
                            <div className="line_input">
                                <label htmlFor="email">Email:</label>
                                <div className="input_box">
                                    <span className="icon_input">
                                        <i className="fa-solid fa-envelope icon"></i>
                                    </span>
                                    <input
                                        className="input"
                                        name="email"
                                        id="mail"
                                        type="text"
                                        placeholder="email@gmail.com"
                                        required
                                        onInput={this.checkEmail}
                                        onFocus={this.handleInputFocus}
                                        onBlur={this.handleInputBlur}
                                    />
                                </div>
                            </div>
                            <p className="erroremail error">{this.state.emailError}</p>
                        </div>
                        <div className="box_input">
                            <div className="line_input">
                                <label htmlFor="phone">Phone:</label>
                                <div className="input_box">
                                    <span className="icon_input">
                                        <i className="fa-solid fa-lock icon"></i>
                                    </span>
                                    <input
                                        className="input"
                                        id="phone"
                                        name="phone"
                                        type="password"
                                        placeholder="phone"
                                        required
                                        onFocus={this.handleInputFocus}
                                        onBlur={this.handleInputBlur}
                                    />
                                </div>
                            </div>
                            <p className="error errorpassconfirm">

                            </p>
                        </div>
                    </div>
                    <div className="box_btn">
                        <button type="reset" className="btn_register btn_reset">
                            <span>Reset</span>
                        </button>
                        <button type="submit" className="btn_register btn_submit">
                            <span>Submit</span>
                        </button>
                    </div>
                    <p className='box_link_login'> <Link to="/login" className="link_login">LogIn</Link></p>
                </form>

            </div>

        );
    }
}

export default Register;