import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../utils/colors";
import apiSports from "../api/api-sports";
import SmallScoreCardNextMatches from "./SmallScoreCardNextMatches";
import LimitAlert from "../screens/settingsScreens/LimitAlert";

const NextMatches = () => {
  const [loading, setLoading] = useState(false);
  const [nextMatches, setNextMatches] = useState(null);
  const [isError, setIsError] = useState("");
  const scrollY = new Animated.Value(0);

  const data = {
    get: "fixtures",
    parameters: {
      league: "283",
      season: "2023",
      next: "10",
    },
    errors: [],
    results: 10,
    paging: {
      current: 1,
      total: 1,
    },
    response: [
      {
        fixture: {
          id: 1049795,
          referee: null,
          timezone: "UTC",
          date: "2023-08-04T15:30:00+00:00",
          timestamp: 1691163000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 11931,
            name: "Stadionul Francisc von Neuman",
            city: "Arad",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 283,
          name: "Liga I",
          country: "Romania",
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 4",
        },
        teams: {
          home: {
            id: 2589,
            name: "Uta Arad",
            logo: "https://media-2.api-sports.io/football/teams/2589.png",
            winner: null,
          },
          away: {
            id: 2583,
            name: "Politehnica Iasi",
            logo: "https://media-1.api-sports.io/football/teams/2583.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1049789,
          referee: null,
          timezone: "UTC",
          date: "2023-08-04T18:30:00+00:00",
          timestamp: 1691173800,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 12282,
            name: "Complex Sportiv Craiova",
            city: "Craiova",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 283,
          name: "Liga I",
          country: "Romania",
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 4",
        },
        teams: {
          home: {
            id: 632,
            name: "Universitatea Craiova",
            logo: "https://media-3.api-sports.io/football/teams/632.png",
            winner: null,
          },
          away: {
            id: 2579,
            name: "AFC Hermannstadt",
            logo: "https://media-3.api-sports.io/football/teams/2579.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1049793,
          referee: null,
          timezone: "UTC",
          date: "2023-08-05T15:30:00+00:00",
          timestamp: 1691249400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1309,
            name: "Stadionul Municipal",
            city: "Botoşani",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 283,
          name: "Liga I",
          country: "Romania",
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 4",
        },
        teams: {
          home: {
            id: 2581,
            name: "FC Botosani",
            logo: "https://media-2.api-sports.io/football/teams/2581.png",
            winner: null,
          },
          away: {
            id: 6910,
            name: "U Craiova 1948",
            logo: "https://media-1.api-sports.io/football/teams/6910.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1049792,
          referee: null,
          timezone: "UTC",
          date: "2023-08-05T18:30:00+00:00",
          timestamp: 1691260200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1913,
            name: "Cluj Arena",
            city: "Cluj-Napoca",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 283,
          name: "Liga I",
          country: "Romania",
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 4",
        },
        teams: {
          home: {
            id: 2599,
            name: "Universitatea Cluj",
            logo: "https://media-2.api-sports.io/football/teams/2599.png",
            winner: null,
          },
          away: {
            id: 635,
            name: "Dinamo Bucuresti",
            logo: "https://media-1.api-sports.io/football/teams/635.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1049796,
          referee: null,
          timezone: "UTC",
          date: "2023-08-06T15:15:00+00:00",
          timestamp: 1691334900,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1312,
            name: "Stadionul Ilie Oană",
            city: "Ploieşti",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 283,
          name: "Liga I",
          country: "Romania",
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 4",
        },
        teams: {
          home: {
            id: 2598,
            name: "Petrolul Ploiesti",
            logo: "https://media-3.api-sports.io/football/teams/2598.png",
            winner: null,
          },
          away: {
            id: 2596,
            name: "Farul Constanta",
            logo: "https://media-3.api-sports.io/football/teams/2596.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1049790,
          referee: null,
          timezone: "UTC",
          date: "2023-08-06T18:30:00+00:00",
          timestamp: 1691346600,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1326,
            name: "Arena Naţională",
            city: "Bucureşti",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 283,
          name: "Liga I",
          country: "Romania",
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 4",
        },
        teams: {
          home: {
            id: 559,
            name: "FCSB",
            logo: "https://media-1.api-sports.io/football/teams/559.png",
            winner: null,
          },
          away: {
            id: 2246,
            name: "CFR 1907 Cluj",
            logo: "https://media-2.api-sports.io/football/teams/2246.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1049791,
          referee: null,
          timezone: "UTC",
          date: "2023-08-07T15:30:00+00:00",
          timestamp: 1691422200,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 12593,
            name: "Arena Sepsi OSK",
            city: "Sfântu Gheorghe",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 283,
          name: "Liga I",
          country: "Romania",
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 4",
        },
        teams: {
          home: {
            id: 2585,
            name: "Sepsi OSK Sfantu Gheorghe",
            logo: "https://media-1.api-sports.io/football/teams/2585.png",
            winner: null,
          },
          away: {
            id: 6886,
            name: "Oţelul",
            logo: "https://media-3.api-sports.io/football/teams/6886.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1049794,
          referee: null,
          timezone: "UTC",
          date: "2023-08-07T18:30:00+00:00",
          timestamp: 1691433000,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1315,
            name: "Stadionul Anghel Iordănescu",
            city: "Voluntari",
          },
          status: {
            long: "Not Started",
            short: "NS",
            elapsed: null,
          },
        },
        league: {
          id: 283,
          name: "Liga I",
          country: "Romania",
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 4",
        },
        teams: {
          home: {
            id: 2578,
            name: "FC Voluntari",
            logo: "https://media-1.api-sports.io/football/teams/2578.png",
            winner: null,
          },
          away: {
            id: 6231,
            name: "Rapid",
            logo: "https://media-3.api-sports.io/football/teams/6231.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1049797,
          referee: null,
          timezone: "UTC",
          date: "2023-08-12T00:00:00+00:00",
          timestamp: 1691798400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1894,
            name: "Stadionul Municipal",
            city: "Sibiu",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 283,
          name: "Liga I",
          country: "Romania",
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 5",
        },
        teams: {
          home: {
            id: 2579,
            name: "AFC Hermannstadt",
            logo: "https://media-3.api-sports.io/football/teams/2579.png",
            winner: null,
          },
          away: {
            id: 559,
            name: "FCSB",
            logo: "https://media-2.api-sports.io/football/teams/559.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
      {
        fixture: {
          id: 1049798,
          referee: null,
          timezone: "UTC",
          date: "2023-08-12T00:00:00+00:00",
          timestamp: 1691798400,
          periods: {
            first: null,
            second: null,
          },
          venue: {
            id: 1311,
            name: "Stadionul Dr. Constantin Rădulescu",
            city: "Cluj-Napoca",
          },
          status: {
            long: "Time to be defined",
            short: "TBD",
            elapsed: null,
          },
        },
        league: {
          id: 283,
          name: "Liga I",
          country: "Romania",
          logo: "https://media-2.api-sports.io/football/leagues/283.png",
          flag: "https://media-2.api-sports.io/flags/ro.svg",
          season: 2023,
          round: "Regular Season - 5",
        },
        teams: {
          home: {
            id: 2246,
            name: "CFR 1907 Cluj",
            logo: "https://media-2.api-sports.io/football/teams/2246.png",
            winner: null,
          },
          away: {
            id: 2585,
            name: "Sepsi OSK Sfantu Gheorghe",
            logo: "https://media-2.api-sports.io/football/teams/2585.png",
            winner: null,
          },
        },
        goals: {
          home: null,
          away: null,
        },
        score: {
          halftime: {
            home: null,
            away: null,
          },
          fulltime: {
            home: null,
            away: null,
          },
          extratime: {
            home: null,
            away: null,
          },
          penalty: {
            home: null,
            away: null,
          },
        },
      },
    ],
  };

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Maximum_Height = 380;
  //Max Height of the Header
  const Header_Minimum_Height = 0;
  //Min Height of the Header

  const getNextMatches = async () => {
    try {
      const response = await apiSports.get("/fixtures", {
        params: {
          league: 283,
          season: 2023,
          next: 10,
        },
      });

      // console.log(
      //   "response?.data",
      //   response?.data.errors.requests.includes(
      //     "reached the request limit for the day"
      //   )
      // );
      response?.data.errors.requests.includes &&
        setIsError("Max limit for today been reached");
      response?.data.results > 0 && setNextMatches(response?.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // getNextMatches();
  }, []);

  const matchData = data?.response?.map((el) => {
    return <SmallScoreCardNextMatches data={el} key={el?.fixture?.id} />;
  });

  return (
    <View style={styles.containerStyle}>
      {loading ? (
        // Show a loading spinner or message while waiting for data
        <Text>Loading...</Text>
      ) : data ? (
        // Render the data when it's available
        <ScrollView
          style={styles.scrollView}
          scrollEventThrottle={16}
          // onScroll={Animated.event(
          //   [{ nativeEvent: { contentOffset: { y: 0 } } }],
          //   { useNativeDriver: false }
          // )}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollY,
                  },
                },
              },
            ],
            { useNativeDriver: false }
          )}
        >
          {matchData}
        </ScrollView>
      ) : isError ? (
        // Handle the case when no data is available or an error occurred
        <LimitAlert />
      ) : (
        // <Text>S-a atins limita pentru azi</Text>
        // Handle the case when no data is available or an error occurred
        <Text>Some other error</Text>
      )}
    </View>
  );
};

export default NextMatches;

const styles = StyleSheet.create({
  matchOutline: {
    margin: 5,
    borderWidth: 3,
    borderColor: "blue",
    // width: "90%",
    height: 270,
    flexDirection: "column",
    justifyContent: "center",

    flex: 1,
    bottom: 0,
  },

  containerStyle: {
    marginTop: 15,
    flexDirection: "column",
  },

  scrollView: {
    flexDirection: "column",
  },

  textHeader: {
    fontSize: 25,
    color: COLORS.titleDarkGray,
    fontWeight: "600",
    marginBottom: 15,
  },
});
