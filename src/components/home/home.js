import Team from '../../../public/jsonData/team'
import Match  from '../../../public/jsonData/match'
import Season  from '../../../public/jsonData/season'
import Player  from '../../../public/jsonData/player'

import Chart from 'chart.js';

import { Bar, Pie } from 'vue-chartjs'
import moment from "moment"

export default {
  extends: Bar,
  name: 'Home',
  components: {Bar, Pie},
  data() {
    return {
      match: null,
      team:  null,
      season: null,
      player: null,
      dataentry: null,
      datalabel: null,
      labels: ['React', 'Vanilla JS', 'JQuery', 'VueJS'],
      dataset: [5, 10, 15, 25]
    }
  },
  computed: {
    matches2016() {
      return this.match ? this.match.filter(match => moment(match['Match_Date']).format('YYYY') === '2016' ): null;
    },
    seasonComputed() {
      return this.season
    },
    battingFirst() {
      return this.match ? this.match.filter(match => match.Win_Type === 'by runs' ): null;
    },
    chasing() {
      return this.match ? this.match.filter(match => match.Win_Type === 'by wickets' ): null;
    }
  },
  mounted(){
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx,{
      type: 'pie',
      data: {
        labels: ["Batting First", "Chasing"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [this.battingFirst.length,this.chasing.length]
        }]
      },
      options: {
        // title: {
        //   display: true,
        //   text: 'Predicted world population (millions) in 2050'
        // }
      }
    });
  },
  created() {
    this.match = Match;
    this.team = Team;
    this.season = Season;
    this.player = Player;
  },
  methods: {
    formatDate(date) {
      return moment(date).format('Do-MMM-YYYY')
    },
    formatYear(date) {
      return moment(date).format('YYYY')
    },
    getTeamName(id) {
      const team = this.team.filter(team => team.Team_Id === id);
      return team[0].Team_Name
    },
    getPlayerName(id) {
      const player = this.player.filter(player => player.Player_Id === id);
      return player[0].Player_Name
    }
  }
  
  
};
