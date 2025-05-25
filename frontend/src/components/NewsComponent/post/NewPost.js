import React, { Component } from "react";
// import { isAuthenticated } from "../auth";
// import { create } from "./apiPost";
import {  useSelector ,connect }                                       from 'react-redux'
import { Redirect } from "react-router-dom";
import { Store } from "@material-ui/icons";
import store from '../../../index'



const create = (userId, token, post) => {
    return fetch(`/api/post/new/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: post
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


const userConnector = connect(
    state => ({ user: state.user.currentUser }),
    dispatch => ({ dispatch })
  );
//   console.log("redux USer",this.props.user)

export default userConnector(
class NewPost extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            photo: "",
            error: "",
            user:{},
            fileSize: 0,
            loading: false,
            redirectToProfile: false
        };
       
    }

    componentDidMount() {
        
        
        //  console.log("this state", store)
        // console.log("redux! user",this.props.user)
        this.postData = new FormData();
       this.setState({ user:user });
    }   

    // File size are restricted! In this case I set 100kb!
    isValid = () => {
        const { title, description, fileSize } = this.state;
        if (fileSize > 100000) {
            this.setState({
                error: "File size should be less than 100kb",
                loading: false
            });
            return false;
        }
        // If title and description were empty!
        // then throw this error message!
        if (title.length === 0 || description.length === 0) {
            this.setState({ error: "All fields are required", loading: false });
            return false;
        }
        return true;
    };

    handleChange = name => event => {
        this.setState({ error: "" });
        const value =
            name === "photo" ? event.target.files[0] : event.target.value;

        const fileSize = name === "photo" ? event.target.files[0].size : 0;
        this.postData.set(name, value);
        this.setState({ [name]: value, fileSize });
    };

    // To submit new post
    clickSubmit = event => {
        event.preventDefault();
        this.setState({ loading: true });

        if (this.isValid()) {
            const userId = user._id;
            const token = user.token;
            
            create(this.postData)
            .then(data => {
                if (data.error) this.setState({ error: data.error });
                else {
                    this.setState({
                        loading: false,
                        title: "",
                        description: "",
                        redirectToProfile: true
                    });
                    
                }
            });
        }
    };

    newPostForm = (title, description) => (
        <form>
            <div className="form-group">
                <label className="text-muted">Post Photo</label>
                <input
                    onChange={this.handleChange("photo")}
                    type="file"
                    accept="image/*"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Title</label>
                <input
                    onChange={this.handleChange("title")}
                    type="text"
                    className="form-control"
                    value={title}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">description</label>
                <textarea
                    onChange={this.handleChange("description")}
                    type="text"
                    className="form-control"
                    value={description}
                />
            </div>

            <button
                onClick={this.clickSubmit}
                className="btn btn-raised btn-primary"
            >
                Create Post
            </button>
        </form>
    );

    render() {
        
        const {
            title,
            description,
            photo,
            error,
            loading,
            redirectToProfile
        } = this.state;
        // const user = this.props.user
        if (redirectToProfile) {
            return <Redirect to={"/news"} />;
        }

        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Create a new post</h2>
                <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                >
                    {error}
                </div>

                {loading ? (
                    <div className="jumbotron text-center">
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    ""
                )}

                {this.newPostForm(title, description)}
            </div>
        );
    }
}

)









// import React, { Component } from "react";


// class NewPost extends Component {
    
// render(){
//     return (
//             <div className="container">
//                 NewPost
//                 </div>
//         );
//     }
        
// }

// export default NewPost;
