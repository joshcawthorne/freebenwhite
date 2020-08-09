import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import firebase from "gatsby-plugin-firebase";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Count from "../components/count";

const FIREBASECONFIG = {
  apiKey: process.env.APIKEY,
  projectId: process.env.PROJECT,
  databaseURL: process.env.DATABASE,
  authDomain: process.env.AUTH,
};

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #19213a;
  color: #fff;
  text-align: center;
`;

const FreedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 70%;
  margin: 0 50px;
  min-height: 400px;

  margin-bottom: 50px;
  @media (max-width: 650px) {
    margin: 0 20px;
    height: 35%;
  }
  @media (max-height: 400px) {
  }
`;

const TitleContainer = styled.div``;

const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const QuestionContainer = styled.div``;

const Subtitle = styled(motion.div)`
  width: 100%;
  text-align: center;
  font-size: 32px;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Answer = styled(motion.div)`
  width: 100%;
  font-size: 180px;
  line-height: 160px;
  text-align: center;
  color: #ffc338;
  @media (max-width: 768px) {
    font-size: 120px;
    line-height: 80px;
  }
`;

const Tweet = styled.a`
  font-size: 28px;
  text-decoration: none;
  color: #ffc338;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CounterOuterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 150px;
`;

const CounterContainer = styled(motion.div)`
  display: flex;
  margin-top: 5;
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 5px;
  text-align: left;
`;

const TweetContainer = styled(motion.div)``;

const TitleAnim = {
  hidden: {
    opacity: 0,
    x: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
      duration: 0.2,
    },
  },
};

const SubtitleAnim = {
  hidden: {
    opacity: 0,
    x: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.2,
      duration: 0.5,
    },
  },
};

const CounterAnim = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const TweetAnim = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.065,
      duration: 0.2,
    },
  },
};

const windowGlobal = typeof window !== "undefined" && window;

function Index() {
  const [counter, setcounter] = useState();
  const [loading, setloading] = useState(true);
  if (windowGlobal) {
    var db = firebase.firestore();
    var docRef = db.collection("counter").doc("counterStore");
  }
  function getCount() {
    if (windowGlobal) {
      console.log("getting");
      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            let data = doc.data();
            console.log(data);
            setcounter(data.count);
            setTimeout(() => {
              setloading(false);
            }, 1500);
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
  }

  function updateCount() {
    if (windowGlobal) {
      db.runTransaction(function (transaction) {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(docRef).then(function (counterDoc) {
          if (!counterDoc.exists) {
            throw "Document does not exist!";
          }
          let data = counterDoc.data();

          console.log(data.count);
          var newCount = data.count + 1;
          console.log(newCount);
          transaction.update(docRef, { count: newCount });
        });
      })
        .then(function () {
          getCount();
        })
        .catch(function (error) {
          console.log("Transaction failed: ", error);
        });
    }
  }

  useEffect(() => {
    if (windowGlobal) {
      getCount();
    }
  });

  return (
    <Layout>
      <SEO title="Free Ben White" />
      <PageContainer>
        <FreedContainer>
          <TitleContainer>
            <Title></Title>
          </TitleContainer>
          <QuestionContainer>
            <Answer initial="hidden" animate={"visible"} variants={TitleAnim}>
              No.
            </Answer>
            <Subtitle
              initial="hidden"
              animate={"visible"}
              variants={SubtitleAnim}
            >
              Ben White is not free yet.
            </Subtitle>
          </QuestionContainer>
          <CounterOuterContainer>
            <CounterContainer
              initial="hidden"
              animate={loading ? "hidden" : "visible"}
              variants={CounterAnim}
            >
              {loading ? null : <Count data={counter} />}
            </CounterContainer>
            <TweetContainer
              initial="hidden"
              animate={loading ? "hidden" : "visible"}
              variants={TweetAnim}
            >
              <Tweet
                href={
                  "https://twitter.com/intent/tweet?text=Free%20Ben%20White%21&hashtags=FreeBenWhite&url=https%3A%2F%2Fwww.freebenwhite.com"
                }
                target={"blank"}
              >
                Click here to Tweet Your Support
              </Tweet>
            </TweetContainer>
          </CounterOuterContainer>
        </FreedContainer>
      </PageContainer>
    </Layout>
  );
}

export default Index;
