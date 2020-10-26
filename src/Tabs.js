import React, { useEffect, useState, useRef } from "react";
import { useIsMount } from "./useIsMount";
import gsap from "gsap";

const Tabs = (props) => {
  const [targets, setActive] = useState({
    active: 0,
    old: null
  });
  const animation = useRef(gsap.timeline({ defaults: { duration: 0.4 } }));
  const articles = useRef([]);
  const articleWrapper = useRef(null);
  const targetEls = useRef([]);
  const slider = useRef(null);
  const isMount = useIsMount();

  useEffect(() => {
    let activeTitle = targetEls.current[targets.active];

    gsap.set(articles.current, { top: 0, yPercent: -100 });

    gsap.set(articles.current[targets.active], { yPercent: 0 });
    gsap.set(articleWrapper.current, {
      minHeight: articles.current[targets.active].offsetHeight
    });

    gsap.set(slider.current, {
      x: activeTitle.offsetLeft,
      width: activeTitle.offsetWidth
    });
  }, []);

  useEffect(() => {
    if (isMount) {
      return;
    }

    //grabs the old elements that need to be animated out
    let oldTitle = targetEls.current[targets.old];
    let oldArticle = articles.current[targets.old];
    //grab the new elements that need to animated in
    let activeTitle = targetEls.current[targets.active];
    let activeArticle = articles.current[targets.active];

    //console.log([oldTitle, oldArticle, activeTitle, activeArticle]);

    //if this animation is currently running, then finish it right away before starting the next
    if (animation.current && animation.current.isActive()) {
      animation.current.progress(1);
    }

    // animate bubble slider to clicked target
    animation.current
      .addLabel("animateOut")
      .to(
        slider.current,
        {
          x: activeTitle.offsetLeft,
          width: activeTitle.offsetWidth
        },
        "animateOut"
      )
      // slide current article down out of view and then set it to starting position at top
      .to(
        oldArticle,
        0.2,
        {
          yPercent: 100,
          ease: "back.in"
        },
        "animateOut"
      )
      //set the old element at the top of the parent contianer
      .set(oldArticle, {
        yPercent: -100
      })
      //animate the height of the article wrapper
      .to(articleWrapper.current, {
        minHeight: activeArticle.offsetHeight
      })
      //animate in the new content
      .to(
        activeArticle,
        {
          duration: 1,
          yPercent: 0,
          ease: "elastic"
        },
        "-=0.25"
      );
  }, [targets]);

  const doCoolStuff = (index) => {
    if (targets.active === index) {
      return;
    }

    setActive((oldTargets) => ({
      active: index,
      old: oldTargets.active
    }));
  };

  return (
    <div className="content-slider">
      <ul className="tabs-block">
        <div className="slider" ref={slider} />
        {props.tabs.map((tab, index) => {
          return (
            <li
              ref={(el) => (targetEls.current[index] = el)}
              key={index}
              onClick={doCoolStuff.bind(null, index)}
              className={index === targets.active ? "active" : null}
            >
              {tab.tabTitle}
            </li>
          );
        })}
      </ul>
      <div className="article-block" ref={articleWrapper}>
        {props.tabs.map((tab, index) => (
          <div
            key={index}
            ref={(el) => (articles.current[index] = el)}
            className="article"
          >
            <h1>{tab.heading}</h1>
            <p>{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
