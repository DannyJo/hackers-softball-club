var players = [
    {
        name: "Daniel",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 41,
            hits: 29,
            walks: 0,
            runsBattedIn: 28,
            firstBase: 12,
            secondBase: 11,
            thirdBase: 3,
            homeRuns: 3,
            struckOut: 0,
            mvp: 2
        }
    },
    {
        name: "Alex",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 45,
            hits: 35,
            walks: 6,
            runsBattedIn: 19,
            firstBase: 6,
            secondBase: 15,
            thirdBase: 4,
            homeRuns: 4,
            struckOut: 0,
            mvp: 1
        }
    },
    {
        name: "Grace",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 41,
            hits: 33,
            walks: 4,
            runsBattedIn: 14,
            firstBase: 16,
            secondBase: 8,
            thirdBase: 3,
            homeRuns: 2,
            struckOut: 0,
            mvp: 6
        }
    },
    {
        name: "Darren",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 44,
            hits: 31,
            walks: 0,
            runsBattedIn: 33,
            firstBase: 13,
            secondBase: 8,
            thirdBase: 3,
            homeRuns: 7,
            struckOut: 0,
            mvp: 1
        }
    },
    {
        name: "Ian M",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 43,
            hits: 38,
            walks: 1,
            runsBattedIn: 27,
            firstBase: 17,
            secondBase: 10,
            thirdBase: 4,
            homeRuns: 6,
            struckOut: 0,
            mvp: 4
        }
    },
    {
        name: "Ella",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 51,
            hits: 32,
            walks: 2,
            runsBattedIn: 11,
            firstBase: 24,
            secondBase: 5,
            thirdBase: 1,
            homeRuns: 0,
            struckOut: 1,
            mvp: 4
        }
    },
    {
        name: "Pete",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 27,
            hits: 14,
            walks: 0,
            runsBattedIn: 8,
            firstBase: 8,
            secondBase: 6,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Rachel",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 43,
            hits: 28,
            walks: 1,
            runsBattedIn: 13,
            firstBase: 22,
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
            atBat: 46,
            hits: 27,
            walks: 2,
            runsBattedIn: 28,
            firstBase: 11,
            secondBase: 8,
            thirdBase: 1,
            homeRuns: 5,
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
            atBat: 6,
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
        name: "Emma",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 40,
            hits: 18,
            walks: 0,
            runsBattedIn: 13,
            firstBase: 14,
            secondBase: 3,
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
            atBat: 14,
            hits: 4,
            walks: 0,
            runsBattedIn: 4,
            firstBase: 4,
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