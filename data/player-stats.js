var players = [
    {
        name: "Daniel",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 52,
            hits: 36,
            walks: 0,
            runsBattedIn: 36,
            firstBase: 16,
            secondBase: 13,
            thirdBase: 3,
            homeRuns: 4,
            struckOut: 0,
            mvp: 2
        }
    },
    {
        name: "Alex",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 49,
            hits: 38,
            walks: 6,
            runsBattedIn: 22,
            firstBase: 7,
            secondBase: 15,
            thirdBase: 5,
            homeRuns: 5,
            struckOut: 0,
            mvp: 1
        }
    },
    {
        name: "Grace",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 53,
            hits: 44,
            walks: 5,
            runsBattedIn: 25,
            firstBase: 21,
            secondBase: 11,
            thirdBase: 4,
            homeRuns: 3,
            struckOut: 0,
            mvp: 7
        }
    },
    {
        name: "Darren",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 55,
            hits: 39,
            walks: 0,
            runsBattedIn: 41,
            firstBase: 15,
            secondBase: 11,
            thirdBase: 4,
            homeRuns: 9,
            struckOut: 0,
            mvp: 2
        }
    },
    {
        name: "Ian M",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 54,
            hits: 47,
            walks: 1,
            runsBattedIn: 35,
            firstBase: 21,
            secondBase: 14,
            thirdBase: 4,
            homeRuns: 7,
            struckOut: 0,
            mvp: 4
        }
    },
    {
        name: "Ella",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 63,
            hits: 43,
            walks: 3,
            runsBattedIn: 12,
            firstBase: 33,
            secondBase: 5,
            thirdBase: 2,
            homeRuns: 0,
            struckOut: 1,
            mvp: 5
        }
    },
    {
        name: "Pete",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 38,
            hits: 22,
            walks: 3,
            runsBattedIn: 11,
            firstBase: 12,
            secondBase: 7,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 1
        }
    },
    {
        name: "Rachel",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 49,
            hits: 31,
            walks: 1,
            runsBattedIn: 15,
            firstBase: 25,
            secondBase: 5,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 1
        }
    },
    {
        name: "Harry",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 54,
            hits: 34,
            walks: 3,
            runsBattedIn: 38,
            firstBase: 13,
            secondBase: 10,
            thirdBase: 2,
            homeRuns: 6,
            struckOut: 0,
            mvp: 2
        }
    },
    {
        name: "Natassia",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 9,
            hits: 4,
            walks: 0,
            runsBattedIn: 0,
            firstBase: 3,
            secondBase: 1,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Hannah",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 16,
            hits: 4,
            walks: 1,
            runsBattedIn: 2,
            firstBase: 2,
            secondBase: 1,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Emma",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 51,
            hits: 25,
            walks: 3,
            runsBattedIn: 15,
            firstBase: 17,
            secondBase: 4,
            thirdBase: 1,
            homeRuns: 0,
            struckOut: 2,
            mvp: 1
        }
    },
    {
        name: "Joe",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 5,
            hits: 3,
            walks: 0,
            runsBattedIn: 3,
            firstBase: 1,
            secondBase: 1,
            thirdBase: 0,
            homeRuns: 1,
            struckOut: 0,
            mvp: 1
        }
    },
    {
        name: "George",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 4,
            hits: 3,
            walks: 0,
            runsBattedIn: 1,
            firstBase: 2,
            secondBase: 0,
            thirdBase: 0,
            homeRuns: 1,
            struckOut: 0,
            mvp: 1
        }
    },
    {
        name: "Ian R",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 1,
            hits: 1,
            walks: 0,
            runsBattedIn: 1,
            firstBase: 1,
            secondBase: 0,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Mike",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 3,
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
        name: "Saskia",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 3,
            hits: 1,
            walks: 0,
            runsBattedIn: 0,
            firstBase: 1,
            secondBase: 0,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 2,
            mvp: 0
        }
    },
    {
        name: "Lucy",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 8,
            hits: 1,
            walks: 0,
            runsBattedIn: 2,
            firstBase: 1,
            secondBase: 0,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Kate",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 2,
            hits: 1,
            walks: 0,
            runsBattedIn: 0,
            firstBase: 1,
            secondBase: 0,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 1,
            mvp: 0
        }
    },
    {
        name: "Jack",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 7,
            hits: 4,
            walks: 0,
            runsBattedIn: 5,
            firstBase: 3,
            secondBase: 1,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Sophie",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 20,
            hits: 8,
            walks: 0,
            runsBattedIn: 6,
            firstBase: 8,
            secondBase: 0,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Helen",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 4,
            hits: 0,
            walks: 0,
            runsBattedIn: 0,
            firstBase: 0,
            secondBase: 0,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Annie",
        type: "GUEST",
        gender: "female",
        stats: {
            atBat: 11,
            hits: 5,
            walks: 1,
            runsBattedIn: 1,
            firstBase: 4,
            secondBase: 0,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Rebecca (ENF)",
        type: "GUEST",
        gender: "female",
        stats: {
            atBat: 4,
            hits: 2,
            walks: 0,
            runsBattedIn: 0,
            firstBase: 1,
            secondBase: 1,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Michelle (STING)",
        type: "GUEST",
        gender: "female",
        stats: {
            atBat: 4,
            hits: 3,
            walks: 0,
            runsBattedIn: 0,
            firstBase: 3,
            secondBase: 0,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Abbie (RAID)",
        type: "GUEST",
        gender: "female",
        stats: {
            atBat: 7,
            hits: 3,
            walks: 0,
            runsBattedIn: 1,
            firstBase: 2,
            secondBase: 1,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Bailey (TIG)",
        type: "GUEST",
        gender: "female",
        stats: {
            atBat: 4,
            hits: 2,
            walks: 0,
            runsBattedIn: 1,
            firstBase: 0,
            secondBase: 1,
            thirdBase: 1,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Lisa (ENF)",
        type: "GUEST",
        gender: "female",
        stats: {
            atBat: 5,
            hits: 3,
            walks: 1,
            runsBattedIn: 1,
            firstBase: 1,
            secondBase: 1,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Laura (TH3)",
        type: "GUEST",
        gender: "female",
        stats: {
            atBat: 5,
            hits: 3,
            walks: 0,
            runsBattedIn: 0,
            firstBase: 3,
            secondBase: 0,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    }
];