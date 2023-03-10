import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl ? imageUrl : 'https://cdn.prod.www.spiegel.de/images/4aee90a4-f14e-4e19-9f40-178a51f3b5d2_w1280_r1.77_fpx33.26_fpy49.98.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span className="badge rounded-pill text-bg-info">{source}</span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-danger">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

