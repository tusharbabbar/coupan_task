var players = [{cost: 6972225, name: 'Yuvraj Singh', type: 'bow', hidden : true},
 {cost: 1095731, name: 'MA Starc', type: 'bow', hidden : true},
 {cost: 6344629, name: 'JA Morkel', type: 'bat', hidden : true},
 {cost: 8857283, name: 'VR Aaron', type: 'bow', hidden : true},
 {cost: 8254293, name: 'AB Dinda', type: 'ar', hidden : true},
 {cost: 846427, name: 'PA Patel', type: 'ar', hidden : true},
 {cost: 6474365, name: 'M Muralitharan', type: 'bat', hidden : true},
 {cost: 5721768, name: 'R Rampaul', type: 'bat', hidden : true},
 {cost: 239181, name: 'NJ Maddinson', type: 'ar', hidden : true},
 {cost: 5309642, name: 'VH Zol', type: 'bat', hidden : true},
 {cost: 8290353, name: 'AN Ahmed', type: 'bat', hidden : true},
 {cost: 6680671, name: 'SB Jakati', type: 'bat', hidden : true},
 {cost: 4133724, name: 'S Rana', type: 'bow', hidden : true},
 {cost: 3166974, name: 'S Sandeep Warrier', type: 'bow', hidden : true},
 {cost: 7109794, name: 'YS Chahal', type: 'ar', hidden : true},
 {cost: 8377544, name: 'T Mishra', type: 'bow', hidden : true},
 {cost: 9976776, name: 'YV Takawale', type: 'bat', hidden : true},
 {cost: 577154, name: 'V Kohli', type: 'ar', hidden : true},
 {cost: 3368690, name: 'AB de Villiers', type: 'bow', hidden : true},
 {cost: 4321144, name: 'CH Gayle', type: 'bow', hidden : true},
 {cost: 4934209, name: 'RV Uthappa', type: 'bow', hidden : true},
 {cost: 2504950, name: 'PP Chawla', type: 'bow', hidden : true},
 {cost: 590993, name: 'Shakib Al Hasan', type: 'bow', hidden : true},
 {cost: 1048789, name: 'R Vinay Kumar', type: 'bow', hidden : true},
 {cost: 8201820, name: 'M Morkel', type: 'wk', hidden : true},
 {cost: 2922081, name: 'UT Yadav', type: 'ar', hidden : true},
 {cost: 6974208, name: 'MK Pandey', type: 'bow', hidden : true},
 {cost: 6804242, name: 'CA Lynn', type: 'wk', hidden : true},
 {cost: 9543823, name: 'PJ Cummins', type: 'bow', hidden : true},
 {cost: 8391908, name: 'RN ten Doeschate', type: 'ar', hidden : true},
 {cost: 6980990, name: 'SA Yadav', type: 'wk', hidden : true},
 {cost: 4539095, name: 'AD Russell', type: 'bow', hidden : true},
 {cost: 4923653, name: 'MS Bisla', type: 'ar', hidden : true},
 {cost: 6160900, name: 'Kuldeep Yadav', type: 'bow', hidden : true},
 {cost: 5114793, name: 'V Pratap Singh', type: 'bat', hidden : true},
 {cost: 3292722, name: 'DB Das', type: 'bow', hidden : true},
 {cost: 4052551, name: 'SS Mondal', type: 'bat', hidden : true},
 {cost: 9300309, name: 'SP Narine', type: 'bow', hidden : true},
 {cost: 2718181, name: 'G Gambhir', type: 'wk', hidden : true},
 {cost: 4624698, name: 'MG Johnson', type: 'bat', hidden : true},
 {cost: 1145174, name: 'GJ Maxwell', type: 'ar', hidden : true},
 {cost: 8596756, name: 'GJ Bailey', type: 'bat', hidden : true},
 {cost: 3506091, name: 'V Sehwag', type: 'bow', hidden : true},
 {cost: 4281893, name: 'R Dhawan', type: 'wk', hidden : true},
 {cost: 2043243, name: 'WP Saha', type: 'bat', hidden : true},
 {cost: 8892601, name: 'SE Marsh', type: 'bat', hidden : true},
 {cost: 2315956, name: 'CA Pujara', type: 'bow', hidden : true},
 {cost: 3236090, name: 'L Balaji', type: 'ar', hidden : true},
 {cost: 8470107, name: 'BE Hendricks', type: 'bow', hidden: true}]

var compositions = [3122, 3113, 4112]

var app = angular.module('CricketInfoApp',['ngCookies'])

app.controller('MainController', ['$scope', 
function($scope){
    console.log(window.localStorage)
    $scope.money = window.localStorage.getItem('money') ? parseInt(window.localStorage.getItem('money')) : 100000000
    $scope.batsmen = window.localStorage.getItem('batsmen') ? parseInt(window.localStorage.getItem('batsmen')) : 0  
    $scope.bowlers = window.localStorage.getItem('bowlers') ? parseInt(window.localStorage.getItem('bowlers')) : 0
    $scope.keepers = window.localStorage.getItem('keepers') ? parseInt(window.localStorage.getItem('keepers')) : 0;
    $scope.all_rounders = window.localStorage.getItem('all_rounders') ? parseInt(window.localStorage.getItem('all_rounders')) : 0;
    $scope.cost = window.localStorage.getItem('cost') ? parseInt(window.localStorage.getItem('cost')) : 0;
    $scope.team = window.localStorage.getItem('team') ? window.localStorage.getItem('team').split(",") : new Array()

    console.log($scope.team)
    for (var i=0;i<players.length;i++){
        if ($scope.team.indexOf(players[i].name) > -1){
            players[i].hidden = false
            }
        }

    $scope.choices = players
    $scope.select = function(index){
        player = $scope.choices[index]
        temp_money = $scope.money - player.cost
        if ($scope.team.length == 8){
            window.alert('Cannot add more than 8 players')
                return(0)
        }
        if (temp_money < 0){
            window.alert('No Sufficient Funds!!!')
            return(0)
            }
        
        if(player['type'] == 'bat'){
            if ($scope.batsmen < 4){
                $scope.batsmen += 1
                $scope.team.push(player.name)
                console.log($scope.team)
                }
            else{
                window.alert("Cannot have more than 4 batsmen!!!")
                return(0)
                }
            }
        else if(player['type'] == 'bow'){
            if ($scope.bowlers < 3){
                $scope.bowlers += 1
                $scope.team.push(player.name)
                }
            else{
                window.alert("Cannot have more than 3 bowlers!!!")
                return(0)
                }
            }
        else if(player['type']== 'ar'){
            if ($scope.all_rounders < 2){
                $scope.all_rounders += 1
                $scope.team.push(player.name)
                }
            else{
                window.alert("Cannot have more than 2 all rounders!!!")
                return(0)
                }
            }
        else if(player['type'] == 'wk'){
            if ($scope.keepers < 1){
                $scope.keepers += 1
                $scope.team.push(player.name)
                }
            else{
                window.alert("Can have only one keeper!!!")
                return(0)
                }
            }
        $scope.money -= player.cost
        $scope.cost += player.cost
        $scope.choices[index].hidden = false
        $scope.updateStorage()
        }
    $scope.discard = function(index){
        player = $scope.choices[index]
        if(player['type'] == 'bat'){
            $scope.batsmen -= 1
        }
        else if(player['type'] == 'bow'){
            $scope.bowlers -= 1
            }
        else if(player['type']== 'ar'){
            $scope.all_rounders -= 1
            }
        else if(player['type'] == 'wk'){
            $scope.keepers -= 1
            }
        var temp = $scope.team.indexOf(player.name)
        if (temp > -1){
            $scope.team.splice(temp, 1)}
        $scope.money += player.cost
        $scope.cost -= player.cost
        $scope.choices[index].hidden = true
        $scope.updateStorage()
        }
    $scope.updateStorage = function(){
        window.localStorage.setItem('money', $scope.money)
        window.localStorage.setItem('batsmen', $scope.batsmen)
        window.localStorage.setItem('bowlers', $scope.bowlers)
        window.localStorage.setItem('keepers', $scope.keepers)
        window.localStorage.setItem('all_rounders', $scope.all_rounders)
        window.localStorage.setItem('cost', $scope.cost)
        window.localStorage.setItem('team', $scope.team)
        }
    $scope.save_team = function(){
        if ($scope.team.length < 8) {
            window.alert('Team must have 8 players!!!')
            return(0)
            } 
        _comp = $scope.batsmen * 1000 + $scope.keepers * 100 + $scope.all_rounders * 10 + $scope.bowlers
        console.log(_comp)
        console.log(compositions.indexOf(_comp))
        if (compositions.indexOf(_comp) > -1){
            window.alert('Success!!! Your Team:' + $scope.team)
            return(0)
            }
        else {
            if ($scope.keepers < 1){
                window.alert('You must have one keeper!!!')
                return(0)
                }
            if ($scope.all_rounders == 2){
                if ($scope.bowlers > 2){
                    window.alert('Must have 3 batsmen and 2 bowlers for this composition. Reduce a bowler and add a batsmen')
                    return(0)
                    }
                else {
                    window.alert('Either reduce an all rounder or a batsmen and add bowler for valid configuration.')
                    }
                }
            }
    }
    $scope.reset_selections = function(){
        $scope.money = 100000000 
        $scope.batsmen = 0
        $scope.bowlers = 0
        $scope.keepers = 0
        $scope.all_rounders = 0
        $scope.cost = 0
        $scope.team = new Array()
        $scope.updateStorage()
        for(var i=0; i< $scope.choices.length; i++){
            $scope.choices[i].hidden = true
            }
        }
}
]);
