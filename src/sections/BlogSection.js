
// styled
import styled from 'styled-components';

// images
import Blog1 from '../images/travel7.jpg';
import Blog2 from '../images/travel9.jpg';
import User from '../images/user.png';
import Calender from '../images/calender.png';

const BlogSection = () => {
    return (
        <StyledBlog id="blog">
        <h2>Our Latest Blog & News</h2>
        <div className="blog">
            <article>
                <img className="blogImage" src={Blog1} alt="room" />
                <div className="articleInfo">
                    <div className="blogWriter">
                        <img src={Calender} alt="" />
                        <h6>03-24-20</h6>
                    </div>
                    <div className="blogWriter">
                        <img src={User} />
                        <h6>Gus Friendly</h6>
                    </div>
                </div>
                <h4>Remarked as the Best Views in Orlando</h4>
                <p>Our Orlando, Florida Resort was rated amongst the top destintations in America for sight seeing and overall views. Something else in this paragraph that I haven't came up with yet. Something else in this paragraph that I haven't came up
                    with yet.</p>
            </article>
            <article>
                <img className="blogImage" src={Blog2} alt="room"/>
                <div className="articleInfo">
                    <div className="blogWriter">
                        <img src={Calender} alt="" />
                        <h6>03-24-20</h6>
                    </div>
                    <div className="blogWriter">
                        <img src={User} alt="" />
                        <h6>Stan Marsh</h6>
                    </div>
                </div>
                <h4>Top Ranked Destintations from Las Vegas Hotel</h4>
                <p>Our Orlando, Florida Resort was rated amongst the top destintations in America for sight seeing and overall views. Something else in this paragraph that I haven't came up with yet. Something else in this paragraph that I haven't came up
                    with yet.</p>
            </article>
        </div>
    </StyledBlog>
    )
}

const StyledBlog = styled.div`
        height: 100%;
        width: 80%;
        background: white;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        h2 {
            margin: 8% 0 5% 0;
            font-size: 3em;
            border-top: solid 3px #7b45aa;
            width: 80%;
            color: #7b45aa;
        }
        .blog {
            display: flex;
            width: 80%;
            margin: auto;
        }
        article {
            width: 45%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            align-items: center;
            margin: 0 auto;
            border-radius: 8px;
        }
        .blogImage {
            width: 480px;
            border-radius: 8px;
        }
        .articleInfo {
            display: flex;
            align-items: center;
            margin: 1em;
        }
        .blogWriter {
            display: flex;
            img{
                width: 30px;
            }
        }
        i,
        h6 {
            font-size: 1.2em;
            margin: 6px;
        }
        i {
            color: #7b45aa;
        }
        p {
            font-size: 1.2em;
        }
        h4 {
            font-size: 1.5em;
            margin: .5em 0 1em 0;
            letter-spacing: 1px;
        }

`;

export default BlogSection;