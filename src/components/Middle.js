import React from 'react'
// import  '../script';

export default function Middle(props) {
        return (
                <>
                        <div className="middle">
                                <div className="stories">
                                        <div className="story">
                                                <div className="profile-photo">
                                                        <img src="{props.photo}" alt="" />
                                                </div>
                                                <p className="name">{props.story}</p>
                                        </div>

                                        <div className="story">
                                                <div className="profile-photo">
                                                        <img src="img/chris-hemsworth-profile.jpg" alt="" />
                                                </div>
                                                <p className="name">Chris Hemsworth</p>
                                        </div>

                                        <div className="story">
                                                <div className="profile-photo">
                                                        <img src="img/rosamund-profile.jpg" alt="" />
                                                </div>
                                                <p className="name">Rosamund Pike</p>
                                        </div>

                                        <div className="story">
                                                <div className="profile-photo">
                                                        <img src="img/chris-evans-profile.jpg" alt="" />
                                                </div>
                                                <p className="name">Chris Evans</p>
                                        </div>

                                        <div className="story">
                                                <div className="profile-photo">
                                                        <img src="img/lionel-profile.jpg" alt="" />
                                                </div>
                                                <p className="name">Lionel Messi</p>
                                        </div>

                                        <div className="story">
                                                <div className="profile-photo">
                                                        <img src="img/tom-holland-profile.jpg" alt="" />
                                                </div>
                                                <p className="name">Tom Holland</p>
                                        </div>
                                </div>

                                <form className="create-post">
                                        <div className="profile-photo">
                                                <img src="img/profile.jpg" alt="" />
                                        </div>
                                        <input type="text" name="name" id="name" placeholder="What's on your mind! Gaurav!" />
                                        <input type="submit" className="btn btn-primary" value="Post" />
                                </form>


                                <div className="feeds">
                                        <div className="feed">
                                                <div className="head">

                                                        <div className="user">
                                                                <div className="profile-photo">
                                                                        <img src="img/{props.userImage}" alt="" />
                                                                </div>

                                                                <div className="ingo">
                                                                        <h3>{props.user}</h3>
                                                                        <small>{props.venue}</small>
                                                                </div>
                                                        </div>

                                                        {/* <span className="edit">
                                                                <i><span className="material-symbols-outlined">
                                                                        more_vert
                                                                </span></i>
                                                        </span> */}
                                                </div>

                                                <div className="photo">
                                                        <img src="img/messi.jpeg" alt="" />
                                                </div>

                                                <div className="action-button">
                                                        <div className="interaction-buttons">
                                                                {/* <span><span className="material-symbols-outlined">
                                                                        favorite
                                                                </span></span>
                                                                <span>
                                                                        <i className="fa-regular fa-comment-dots fa-sm"></i>
                                                                </span>
                                                                <span><span className="material-symbols-outlined">
                                                                        share
                                                                </span></span>
                                                                <span></span> */}
                                                        </div>
                                                        <div className="bookmark">
                                                                {/* <span><i className="fa-regular fa-bookmark"></i></span> */}
                                                        </div>
                                                </div>

                                                <div className="liked-by">
                                                        <span><img src="img/chris-evans-profile.jpg" alt="" /></span>
                                                        <span><img src="img/tom-holland-profile.jpg" alt="" /></span>
                                                        <span><img src="img/rosamund-profile.jpg" alt="" /></span>
                                                        <p>Liked by <b>Scarlett Johnasson</b> and <b>5,10,435 others</b></p>
                                                </div>

                                                <div className="caption">
                                                        <p><b>Lionel Messi</b> Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit.
                                                                Totam
                                                                dolore voluptatum repudiandae sequi odio nisi cum laborum esse nulla
                                                                dolorum
                                                                atque tenetur exercitationem aliquid assumenda, id ullam molestiae.
                                                                Expedita,
                                                                voluptas.
                                                                <span className="harsh-tag">#lifestyle</span>
                                                        </p>
                                                </div>
                                                <div className="comments text-muted"><a href="#">View all 59,217 comments</a></div>
                                        </div>

                                        <div className="feed">
                                                <div className="head">
                                                        <div className="user">
                                                                <div className="profile-photo">
                                                                        <img src="img/chris-hemsworth-profile.jpg" alt="" />
                                                                </div>

                                                                <div className="ingo">
                                                                        <h3>Chris Hemsworth</h3>
                                                                        <small>Brooklyn, a few minutes ago</small>
                                                                </div>
                                                        </div>
                                                        {/* <span className="edit">
                                                                <i><span className="material-symbols-outlined">
                                                                        more_vert
                                                                </span></i>
                                                        </span> */}
                                                </div>

                                                <div className="photo">
                                                        <img src="img/chris-hemsworth.jpeg" alt="" />
                                                </div>

                                                <div className="action-button">
                                                        <div className="interaction-buttons">
                                                                <span className="material-symbols-outlined">
                                                                        favorite
                                                                </span>

                                                                <span>
                                                                        <i className="fa-regular fa-comment-dots fa-sm"></i>
                                                                </span>

                                                                <span className="material-symbols-outlined">
                                                                        share
                                                                </span>
                                                        </div>
                                                        <div className="bookmark">
                                                                {/* <span><i className="fa-regular fa-bookmark"></i></span> */}
                                                        </div>
                                                </div>

                                                <div className="liked-by">
                                                        <span><img src="img/rosamund-profile.jpg" alt="" /></span>
                                                        <span><img src="img/chris-evans-profile.jpg" alt="" /></span>
                                                        <span><img src="img/tom-holland-profile.jpg" alt="" /></span>
                                                        <p>Liked by <b>Chris Evans</b> and <b>56,018 others</b></p>
                                                </div>

                                                <div className="caption">
                                                        <p><b>Chris Hemsworth </b>Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit.
                                                                Totam
                                                                dolore voluptatum repudiandae sequi odio nisi cum laborum esse nulla
                                                                dolorum
                                                                atque tenetur exercitationem aliquid assumenda, id ullam molestiae.
                                                                Expedita,
                                                                voluptas.
                                                                <span className="harsh-tag">#lifestyle</span>
                                                        </p>
                                                </div>
                                                <div className="comments text-muted"><a href="#">View all 5,327 comments</a></div>
                                        </div>

                                        <div className="feed">
                                                <div className="head">
                                                        <div className="user">
                                                                <div className="profile-photo">
                                                                        <img src="img/tom-holland-profile.jpg /" alt="" />
                                                                </div>

                                                                <div className="ingo">
                                                                        <h3>Tom Holland</h3>
                                                                        <small>Dubai, 2 hours ago</small>
                                                                </div>
                                                        </div>
                                                        {/* <span className="edit">
                                                                <i><span className="material-symbols-outlined">
                                                                        more_vert
                                                                </span></i>
                                                        </span> */}
                                                </div>

                                                <div className="photo">
                                                        <img src="img/dubai.jpeg" alt="" />
                                                </div>

                                                <div className="action-button">
                                                        <div className="interaction-buttons">
                                                                {/* <span><span className="material-symbols-outlined">
                                                                        favorite
                                                                </span></span>
                                                                <span>
                                                                        <i className="fa-regular fa-comment-dots fa-sm"></i>
                                                                </span>
                                                                <span><span className="material-symbols-outlined">
                                                                        share
                                                                </span></span>
                                                                <span></span> */}
                                                        </div>

                                                        <div className="bookmark">
                                                                {/* <span><i className="fa-regular fa-bookmark"></i></span> */}
                                                        </div>
                                                </div>

                                                <div className="liked-by">
                                                        <span><img src="img/chris-hemsworth-profile.jpg" alt="" /></span>
                                                        <span><img src="img/chris-evans-profile.jpg" alt="" /></span>
                                                        <span><img src="img/rdj.jpeg" alt="" /></span>
                                                        <p>Liked by <b>Zendaya</b> and <b>32,861 others</b></p>
                                                </div>

                                                <div className="caption">
                                                        <p><b>Tom Holland </b>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                Totam
                                                                dolore voluptatum repudiandae sequi odio nisi cum laborum esse nulla
                                                                dolorum
                                                                atque tenetur exercitationem aliquid assumenda, id ullam molestiae.
                                                                Expedita,
                                                                voluptas.
                                                                <span className="harsh-tag">#lifestyle</span>
                                                        </p>
                                                </div>
                                                <div className="comments text-muted"><a href="#">View all 2897 comments</a></div>
                                        </div>


                                        <div className="feed">
                                                <div className="head">
                                                        <div className="user">
                                                                <div className="profile-photo">
                                                                        <img src="img/rosamund-profile.jpg" alt="" />
                                                                </div>

                                                                <div className="ingo">
                                                                        <h3>Rosamund Pike</h3>
                                                                        <small>Manhattan, Just now</small>
                                                                </div>
                                                        </div>

                                                        {/* <span className="edit">
                                                                <i><span className="material-symbols-outlined">
                                                                        more_vert
                                                                </span></i>
                                                        </span> */}
                                                </div>

                                                <div className="photo">
                                                        <img src="img/rosamund-pike.jpeg" alt="" />
                                                </div>

                                                <div className="action-button">
                                                        <div className="interaction-buttons">
                                                                {/* <span>
                                                                        <span className="material-symbols-outlined">
                                                                                favorite
                                                                        </span>
                                                                </span>

                                                                <span>
                                                                        <i className="fa-regular fa-comment-dots fa-sm top"></i>
                                                                </span>

                                                                <span>
                                                                        <span className="material-symbols-outlined">
                                                                                share
                                                                        </span>
                                                                </span> */}

                                                        </div>
                                                        {/* <div className="bookmark">
                                                                <span><i className="fa-regular fa-bookmark"></i></span>
                                                        </div> */}
                                                </div>

                                                <div className="liked-by">
                                                        <span><img src="img/rdj.jpeg" alt="" /></span>
                                                        <span><img src="img/chris-evans-profile.jpg" alt="" /></span>
                                                        <span><img src="img/chris-hemsworth-profile.jpg" alt="" /></span>
                                                        <p>Liked by <b>Robert Downey Jr.</b> and <b>867 others</b></p>
                                                </div>

                                                <div className="caption">
                                                        <p><b>Rosamund Pike </b>Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit.
                                                                Totam
                                                                dolore voluptatum repudiandae sequi odio nisi cum laborum esse nulla
                                                                dolorum
                                                                atque tenetur exercitationem aliquid assumenda, id ullam molestiae.
                                                                Expedita,
                                                                voluptas.
                                                                <span className="harsh-tag">#lifestyle</span>
                                                        </p>
                                                </div>
                                                <div className="comments text-muted"><a href="#">View all 277 comments</a></div>
                                        </div>


                                        <div className="feed">
                                                <div className="head">
                                                        <div className="user">
                                                                <div className="profile-photo">
                                                                        <img src="img/chris-evans-profile.jpg" alt="" />
                                                                </div>

                                                                <div className="ingo">
                                                                        <h3>Chris Evans</h3>
                                                                        <small>New York, 3 days ago</small>
                                                                </div>
                                                        </div>
                                                        {/* <span className="edit">
                                                                <i><span className="material-symbols-outlined">
                                                                        more_vert
                                                                </span></i>
                                                        </span> */}
                                                </div>

                                                <div className="photo">
                                                        <img src="img/newyork.jpeg" alt="" />
                                                </div>

                                                <div className="action-button">
                                                        <div className="interaction-buttons">
                                                                {/* <span><span className="material-symbols-outlined">
                                                                        favorite
                                                                </span></span>
                                                                <span>
                                                                        <i className="fa-regular fa-comment-dots fa-sm"></i>
                                                                </span>
                                                                <span><span className="material-symbols-outlined">
                                                                        share
                                                                </span></span>
                                                                <span></span> */}
                                                        </div>
                                                        <div className="bookmark">
                                                                {/* <span><i className="fa-regular fa-bookmark"></i></span> */}
                                                        </div>
                                                </div>

                                                <div className="liked-by">
                                                        <span><img src="img/tom-holland-profile.jpg" alt="" /></span>
                                                        <span><img src="img/chris-evans-profile.jpg" alt="" /></span>
                                                        <span><img src="img/rosamund-profile.jpg" alt="" /></span>
                                                        <p>Liked by <b>Robert Downey Jr.</b> and <b>3,23,812 others</b></p>
                                                </div>

                                                <div className="caption">
                                                        <p><b>Chris Evans </b>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                Totam
                                                                dolore voluptatum repudiandae sequi odio nisi cum laborum esse nulla
                                                                dolorum
                                                                atque tenetur exercitationem aliquid assumenda, id ullam molestiae.
                                                                Expedita,
                                                                voluptas.
                                                                <span className="harsh-tag">#lifestyle</span>
                                                        </p>
                                                </div>
                                                <div className="comments text-muted"><a href="#">View all 67,210 comments</a></div>
                                        </div>
                                </div>
                        </div>
                </>
        );
}
