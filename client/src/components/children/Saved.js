// Dependencies
import React from 'react';

export default class Saved extends React.Component {

    render() {
        return (
            <div className='col-12'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='panel panel-primary'>
                            <div className='panel-heading'>
                                <h3 className='panel-title'> Saved Articles </ h3>
                            </ div>

                            <div className='panel-body'>
                                {this.props.saved.map((article, i) => {
                                    return (
                                        <div key={i} onClick={() => this.props.deleteArticle(article._id, i)} className='row savedRow'>
                                            <div className='col-5 articleText'>
                                                <a href={article.url}> {article.title} </ a>
                                            </ div>

                                            <div className='col-5 dateText'>
                                                Date Saved: {article.date}
                                            </ div>

                                            <div className='col-2 pull-right'>
                                                <button className='btn btn-primary removeButton pull-right'> Remove </ button>
                                            </ div>
                                        </ div>
                                    );
                                })}

                            </ div>
                        </ div>
                    </ div>
                </ div>
            </ div>
        );
    }
}