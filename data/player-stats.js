var players = [
    {
        name: "Daniel",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 18,
            hits: 14,
            walks: 0,
            runsBattedIn: 12,
            firstBase: 5,
            secondBase: 7,
            thirdBase: 1,
            homeRuns: 1,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Alex",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 20,
            hits: 14,
            walks: 4,
            runsBattedIn: 7,
            firstBase: 1,
            secondBase: 5,
            thirdBase: 3,
            homeRuns: 1,
            struckOut: 0,
            mvp: 1
        }
    },
    {
        name: "Grace",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 19,
            hits: 15,
            walks: 3,
            runsBattedIn: 5,
            firstBase: 9,
            secondBase: 3,
            thirdBase: 0,
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
            atBat: 18,
            hits: 10,
            walks: 0,
            runsBattedIn: 9,
            firstBase: 6,
            secondBase: 4,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 0,
            mvp: 0
        }
    },
    {
        name: "Ian M",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 22,
            hits: 18,
            walks: 0,
            runsBattedIn: 16,
            firstBase: 10,
            secondBase: 3,
            thirdBase: 2,
            homeRuns: 3,
            struckOut: 0,
            mvp: 3
        }
    },
    {
        name: "Ella",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 23,
            hits: 15,
            walks: 1,
            runsBattedIn: 6,
            firstBase: 10,
            secondBase: 4,
            thirdBase: 0,
            homeRuns: 0,
            struckOut: 1,
            mvp: 3
        }
    },
    {
        name: "Pete",
        type: "ROSTERED",
        gender: "male",
        stats: {
            atBat: 11,
            hits: 6,
            walks: 0,
            runsBattedIn: 2,
            firstBase: 5,
            secondBase: 1,
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
            atBat: 17,
            hits: 12,
            walks: 1,
            runsBattedIn: 6,
            firstBase: 9,
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
            atBat: 20,
            hits: 10,
            walks: 1,
            runsBattedIn: 12,
            firstBase: 3,
            secondBase: 4,
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
        name: "Emma",
        type: "ROSTERED",
        gender: "female",
        stats: {
            atBat: 19,
            hits: 9,
            walks: 0,
            runsBattedIn: 5,
            firstBase: 8,
            secondBase: 0,
            thirdBase: 1,
            homeRuns: 0,
            struckOut: 2,
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
        name: "Annie",
        type: "GUEST",
        gender: "female",
        stats: {
            atBat: 4,
            hits: 1,
            walks: 0,
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
    }
];