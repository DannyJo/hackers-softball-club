var players = [
    {
        name: "Daniel",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 23,
            hits: 18,
            walks: 0,
            runsBattedIn: 16,
            firstBase: 7,
            secondBase: 8,
            thirdBase: 1,
            homeRuns: 2,
            struckOut: 0,
            mvp: 1
        }
    },
    {
        name: "Alex",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 29,
            hits: 19,
            walks: 4,
            runsBattedIn: 11,
            firstBase: 3,
            secondBase: 7,
            thirdBase: 3,
            homeRuns: 2,
            struckOut: 0,
            mvp: 1
        }
    },
    {
        name: "Grace",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 24,
            hits: 19,
            walks: 4,
            runsBattedIn: 7,
            firstBase: 11,
            secondBase: 3,
            thirdBase: 1,
            homeRuns: 0,
            struckOut: 0,
            mvp: 2
        }
    },
    {
        name: "Darren",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 23,
            hits: 15,
            walks: 0,
            runsBattedIn: 13,
            firstBase: 9,
            secondBase: 4,
            thirdBase: 1,
            homeRuns: 1,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Ian M",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 31,
            hits: 27,
            walks: 1,
            runsBattedIn: 20,
            firstBase: 13,
            secondBase: 6,
            thirdBase: 3,
            homeRuns: 4,
            struckOut: 0,
            mvp: 3
        }
    },
    {
        name: "Ella",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 33,
            hits: 19,
            walks: 1,
            runsBattedIn: 8,
            firstBase: 14,
            secondBase: 4,
            thirdBase: 0,
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
            atBat: 15,
            hits: 9,
            walks: 0,
            runsBattedIn: 4,
            firstBase: 6,
            secondBase: 3,
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
            atBat: 22,
            hits: 16,
            walks: 1,
            runsBattedIn: 7,
            firstBase: 13,
            secondBase: 2,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Harry",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 25,
            hits: 13,
            walks: 1,
            runsBattedIn: 14,
            firstBase: 5,
            secondBase: 5,
            thirdBase: 1,
            homeRuns: 1,
            struckOut: 0,
            mvp: 1
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
        name: "Emma",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 24,
            hits: 12,
            walks: 0,
            runsBattedIn: 9,
            firstBase: 9,
            secondBase: 2,
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
            atBat: 4,
            hits: 3,
            walks: 0,
            runsBattedIn: 4,
            firstBase: 2,
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
            atBat: 5,
            hits: 0,
            walks: 0,
            runsBattedIn: 1,
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
            atBat: 8,
            hits: 4,
            walks: 1,
            runsBattedIn: 1,
            firstBase: 3,
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
        name: "Bailey",
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
    }
];