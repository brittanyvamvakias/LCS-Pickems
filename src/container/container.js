import React, { Component } from 'react';

class Container extends Component {
    constructor(props) {
        super(props);
        const teamNameMap = new Map();
        this.createTeamNameMap(teamNameMap);
        const schedule = [
            {team1: 'TL', team2: 'C9', teamSelected: 0},
            {team1: '100T', team2: 'TSM', teamSelected: 0},
            {team1: 'CLG', team2: 'EG', teamSelected: 0},
            {team1: 'FLY', team2: 'GGS', teamSelected: 0},
            {team1: 'DIG', team2: 'IMT', teamSelected: 0}
        ];
        this.state = {schedule: schedule, teamNameMap: teamNameMap};
    }

    createTeamNameMap(map) {
        map.set('TL', 'Team Liquid');
        map.set('C9', 'Cloud9');
        map.set('TSM', 'Team Solo Mid');
        map.set('FLY', 'Fly Quest');
        map.set('GGS', 'Golden Guardians');
        map.set('IMT', 'Immortals');
        map.set('DIG', 'Team Dignitas');
        map.set('EG', 'Evil Geniuses');
        map.set('CLG','Counter Logic Gaming');
        map.set('100T', '100 Thieves');
        return map;
    }
    
    teamSelected = (gameIterator, teamSelected) => {
        let tempSchedule = this.state.schedule;

        if (tempSchedule[gameIterator].teamSelected !== teamSelected) {
            tempSchedule[gameIterator].teamSelected = teamSelected
        } else {
            // if reclicking the same team unselect the team
            tempSchedule[gameIterator].teamSelected = 0;
        }
        this.setState({schedule: tempSchedule});
    }

    createList = () => {
        let list = [];

        for (let i = 0; i < this.state.schedule.length; i++) {
            
            const team1 = this.state.teamNameMap.get(this.state.schedule[i].team1);
            const team2 = this.state.teamNameMap.get(this.state.schedule[i].team2);
            const keyName = `game${i}`;

            const team1OverlayName = this.state.schedule[i].teamSelected === 1 ? 
                'primary-overlay-team-1-selected' : 'primary-overlay-team-1'; 

            const team2OverlayName = this.state.schedule[i].teamSelected === 2 ? 
                'primary-overlay-team-2-selected' : 'primary-overlay-team-2'; 

            list.push(
            <div key={keyName} className="team-box-container">
                <button className="individual-teams-container-team-1" onClick={(e) => this.teamSelected(i,1)}>
                    <span className={team1OverlayName}></span>
                </button>
                <div className="team-seperator"></div>
                {team1}
                <button className="individual-teams-container-team-2" onClick={(e) => this.teamSelected(i,2)}>
                    <span className={team2OverlayName}></span>
                </button>
                {team2}
            </div>
            )
        }

        return list;
    }
    
    render() {
        return (
            <div className="container-fluid primary-container">
                {this.createList()}
            </div>
        )
    }
}

export default Container;