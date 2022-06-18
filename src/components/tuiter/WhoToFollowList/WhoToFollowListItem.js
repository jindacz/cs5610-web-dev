const WhoToFollowListItem = ({
    who = {
        avatarIcon: '../../../images/nasa.png',
        userName: 'NASA',
        handle: 'NASA',
    }
}
) => {
    return(
        <li className="list-group-item">
                    <div className="row">
                        <div className="col-3">
                            <img src={who.avatarIcon} alt=""/>
                        </div>
                        <div className="col-6">
                            <span className="title">{who.userName}</span>
                            <i className="fas fa-check-circle"></i>
                            <br/>
                            <span>@{who.handle}</span>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-primary">Follow</button>
                        </div>
                    </div>
                </li>
        );   
}

export default WhoToFollowListItem;
