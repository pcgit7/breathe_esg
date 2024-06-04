import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";

const Home = () => {

  const dispatch = useDispatch();
 
  return (
    <Layout>
      <Row gutter={20}>
        
      </Row>
    </Layout>
  );
};

export default Home;
