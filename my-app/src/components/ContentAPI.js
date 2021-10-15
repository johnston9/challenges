import React, { Component } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import axois from "axios";
import API_KEY from "../secrets"

export class ContentAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: [],
        }
    }

    handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = this.state.savedPosts.filter((post) => {
            return post.user.toLowerCase().includes(name);
        })
        this.setState({
            posts: filteredPosts
        })
    }
    
    componentDidMount() {
        this.fetchImages()
    }

    async fetchImages() {
        const response = await axois.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&q=cats`) 
        const fetchedPosts = response.data.hits
        this.setState({
            posts: fetchedPosts,
            isLoaded: true,
            savedPosts: fetchedPosts
        })
    }

    render() {
        return (
            <div className={css.Content}>               
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="searchInput" >Search:</label>
                        <input 
                        type="search" 
                        id="searchInput"
                        placeholder="By Author"
                        onChange={(event) => this.handleChange(event) }
                        />
                    </form>
                    <h5>posts found {this.state.posts.length} </h5>
                </div>

                <div className={css.SearchResults}>
                    {this.state.isLoaded ?
                    <PostItemAPI savedPosts={this.state.posts} />
                    :
                    <Loader />
                    }
                    
                </div>
            </div>
        )
    }
}

export default ContentAPI