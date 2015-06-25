var players = [
    {
        name: "Daniel Johansson",
        type: "ROSTERED",
        role: "CAPTAIN",
        gender: "male",
        stats: {
            atBat: 26,
            hits: 22,
            walks: 2,
            runsBattedIn: 18,
            firstBase: 11,
            secondBase: 4,
            thirdBase: 2,
            homeRuns: 3,
            struckOut: 2,
            mvp: 1
        }
    },
    {
        name: "Darren Corner",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 32,
            hits: 26,
            walks: 5,
            runsBattedIn: 17,
            firstBase: 8,
            secondBase: 4,
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
            atBat: 37,
            hits: 35,
            walks: 3,
            runsBattedIn: 31,
            firstBase: 9,
            secondBase: 11,
            thirdBase: 5,
            homeRuns: 7,
            struckOut: 0,
            mvp: 4
        }
    },
    {
        name: "Andy Shaw",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 34,
            hits: 26,
            walks: 2,
            runsBattedIn: 11,
            firstBase: 16,
            secondBase: 5,
            thirdBase: 2,
            homeRuns: 1,
            struckOut: 2,
            mvp: 1
        }
    },
    {
        name: "Dave Ogden",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 27,
            hits: 17,
            walks: 2,
            runsBattedIn: 12,
            firstBase: 7,
            secondBase: 5,
            thirdBase: 3,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Ian Radford",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 27,
            hits: 24,
            walks: 5,
            runsBattedIn: 12,
            firstBase: 11,
            secondBase: 4,
            thirdBase: 3,
            homeRuns: 1,
            struckOut: 0,
            mvp: 1
        }
    },
    {
        name: "Amy Calladine",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 31,
            hits: 13,
            walks: 6,
            runsBattedIn: 6,
            firstBase: 5,
            secondBase: 2,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 8,
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
            atBat: 22,
            hits: 17,
            walks: 5,
            runsBattedIn: 7,
            firstBase: 9,
            secondBase: 2,
            thirdBase: 0,
            homeRuns: 1,
            struckOut: 5,
            mvp: 4
        }
    },
    {
        name: "Kay Carter",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 40,
            hits: 27,
            walks: 8,
            runsBattedIn: 10,
            firstBase: 10,
            secondBase: 6,
            thirdBase: 1,
            homeRuns: 2,
            struckOut: 2,
            mvp: 2
        }
    },
    {
        name: "Suzi Wolfram",
        type: "RETIRED",
        gender: "female",
        stats: {
            atBat: 18,
            hits: 7,
            walks: 3,
            runsBattedIn: 3,
            firstBase: 3,
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
            atBat: 16,
            hits: 12,
            walks: 2,
            runsBattedIn: 10,
            firstBase: 5,
            secondBase: 3,
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
            atBat: 20,
            hits: 11,
            walks: 3,
            runsBattedIn: 9,
            firstBase: 6,
            secondBase: 1,
            thirdBase: 1,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Katie Halligan",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 13,
            hits: 8,
            walks: 0,
            runsBattedIn: 8,
            firstBase: 6,
            secondBase: 2,
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
            atBat: 7,
            hits: 2,
            walks: 1,
            runsBattedIn: 0,
            firstBase: 1,
            secondBase: 0,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Jane Curley (Guest / Dodgers)",
        type: "GUEST",
        gender: "female",
        stats: {
            atBat: 34,
            hits: 24,
            walks: 2,
            runsBattedIn: 24,
            firstBase: 13,
            secondBase: 6,
            thirdBase: 2,
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
            atBat: 6,
            hits: 5,
            walks: 1,
            runsBattedIn: 5,
            firstBase: 2,
            secondBase: 2,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 1
        }
    }
];