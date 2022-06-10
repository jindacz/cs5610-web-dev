const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
                    <div class="row">
                        <div class="col-3">
                            <img src="${who.avatarIcon}" alt="">
                        </div>
                        <div class="col-6">
                            <span class="title">${who.userName}</span>
                            <i class="fas fa-check-circle"></i>
                            <br>
                            <span>@${who.handle}</span>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-primary">Follow</button>
                        </div>
                    </div>
                </li>
        `);   
}

export default WhoToFollowListItem;
