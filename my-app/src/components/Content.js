import React, { Component } from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: [],
        }
    }

    handleChange = (event) => {
        const name = event.target.value.toLowerCase();
        console.log(name)
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        })
        console.log(filteredPosts)
        this.setState({
            posts: filteredPosts
        })
    }
    
    componentDidMount() {
        this.setState({posts: savedPosts})
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 2000)
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
                    <PostItem savedPosts={this.state.posts} />
                    :
                    <Loader />
                    }
                    
                </div>
            </div>
        )
    }
}

export default Content