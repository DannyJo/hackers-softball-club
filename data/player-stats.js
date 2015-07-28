var players = [
    {
        name: "Daniel Johansson",
        type: "ROSTERED",
        role: "CAPTAIN",
        gender: "male",
        stats: {
            atBat: 38,
            hits: 30,
            walks: 2,
            runsBattedIn: 28,
            firstBase: 14,
            secondBase: 8,
            thirdBase: 2,
            homeRuns: 4,
            struckOut: 3,
            mvp: 2
        }
    },
    {
        name: "Darren Corner",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 36,
            hits: 30,
            walks: 6,
            runsBattedIn: 26,
            firstBase: 9,
            secondBase: 6,
            thirdBase: 1,
            homeRuns: 8,
            struckOut: 1,
            mvp: 1
        }
    },
    {
        name: "Ian Mills",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 45,
            hits: 42,
            walks: 3,
            runsBattedIn: 45,
            firstBase: 11,
            secondBase: 14,
            thirdBase: 5,
            homeRuns: 9,
            struckOut: 0,
            mvp: 4
        }
    },
    {
        name: "Andy Shaw",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 41,
            hits: 32,
            walks: 3,
            runsBattedIn: 12,
            firstBase: 20,
            secondBase: 5,
            thirdBase: 2,
            homeRuns: 2,
            struckOut: 2,
            mvp: 2
        }
    },
    {
        name: "Dave Ogden",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 38,
            hits: 24,
            walks: 4,
            runsBattedIn: 20,
            firstBase: 8,
            secondBase: 8,
            thirdBase: 3,
            homeRuns: 1,
            struckOut: 2,
            mvp: 1
        }
    },
    {
        name: "Ian Radford",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 40,
            hits: 35,
            walks: 9,
            runsBattedIn: 19,
            firstBase: 13,
            secondBase: 9,
            thirdBase: 3,
            homeRuns: 1,
            struckOut: 1,
            mvp: 1
        }
    },
    {
        name: "Amy Calladine",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 38,
            hits: 15,
            walks: 7,
            runsBattedIn: 6,
            firstBase: 6,
            secondBase: 2,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 11,
            mvp: 0
        }
    },
    {
        name: "Bev Hurren",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 4,
            hits: 2,
            walks: 0,
            runsBattedIn: 1,
            firstBase: 2,
            secondBase: 0,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Ella Mills",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 30,
            hits: 21,
            walks: 6,
            runsBattedIn: 7,
            firstBase: 12,
            secondBase: 2,
            thirdBase: 0,
            homeRuns: 1,
            struckOut: 6,
            mvp: 5
        }
    },
    {
        name: "Kay Carter",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 54,
            hits: 39,
            walks: 10,
            runsBattedIn: 17,
            firstBase: 19,
            secondBase: 7,
            thirdBase: 1,
            homeRuns: 2,
            struckOut: 2,
            mvp: 3
        }
    },
    {
        name: "Suzi Wolfram",
        type: "RETIRED",
        gender: "female",
        stats: {
            atBat: 23,
            hits: 8,
            walks: 3,
            runsBattedIn: 3,
            firstBase: 4,
            secondBase: 1,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 2,
            mvp: 0
        }
    },
    {
        name: "Pete Rushton",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 21,
            hits: 14,
            walks: 2,
            runsBattedIn: 13,
            firstBase: 6,
            secondBase: 4,
            thirdBase: 1,
            homeRuns: 1,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Rachel Naylor",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 28,
            hits: 18,
            walks: 3,
            runsBattedIn: 14,
            firstBase: 12,
            secondBase: 2,
            thirdBase: 1,
            homeRuns: 0,
            struckOut: 0,
            mvp: 1
        }
    },
    {
        name: "Katie Halligan",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 17,
            hits: 11,
            walks: 0,
            runsBattedIn: 9,
            firstBase: 8,
            secondBase: 3,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 1,
            mvp: 0
        }
    },
    {
        name: "Charlie Lamb",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 11,
            hits: 4,
            walks: 3,
            runsBattedIn: 3,
            firstBase: 1,
            secondBase: 0,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 1,
            mvp: 0
        }
    },
    {
        name: "Jane Curley (Guest / Dodgers)",
        type: "GUEST",
        gender: "female",
        stats: {
            atBat: 37,
            hits: 27,
            walks: 2,
            runsBattedIn: 25,
            firstBase: 15,
            secondBase: 6,
            thirdBase: 3,
            homeRuns: 1,
            struckOut: 1,
            mvp: 0
        }
    },
    {
        name: "Hollie Bees",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 9,
            hits: 6,
            walks: 1,
            runsBattedIn: 6,
            firstBase: 3,
            secondBase: 2,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 1
        }
    },
    {
        name: "Frankie Pilkington",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 4,
            hits: 1,
            walks: 1,
            runsBattedIn: 0,
            firstBase: 0,
            secondBase: 0,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 2,
            mvp: 0
        }
    }
];