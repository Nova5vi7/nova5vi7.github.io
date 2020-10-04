(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  {
    16: function (e, t, a) {
      e.exports = a(28);
    },
    21: function (e, t, a) {},
    28: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(0),
        n = a.n(r),
        s = a(3),
        c = a.n(s),
        l = (a(21), a(1)),
        u = a(4),
        o = "PLAYING",
        m = "FINISH",
        v = { status: "START", step: 0, score: 0 },
        i = a(7),
        x = "CHANGE_STATUS",
        p = "NEXT_STEP",
        E = "GAME_OVER",
        _ = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case x:
              return Object(i.a)({}, e, { status: t.payload.status });
            case p:
              return Object(i.a)({}, e, { step: e.step + 1 });
            case E:
              return Object(i.a)({}, e, {
                status: m,
                step: 0,
                score: t.payload.score,
              });
            default:
              return e;
          }
        },
        d = Object(u.b)(
          _,
          v,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        ),
        f = a(5),
        w = a.n(f),
        N = function (e) {
          var t = e.text,
            a = e.changeStatus;
          return n.a.createElement(
            "button",
            { type: "button", className: "main-button", onClick: a },
            t
          );
        },
        g = function (e) {
          var t = e.onStart;
          return n.a.createElement(
            "div",
            { className: "start-screen" },
            n.a.createElement(
              "div",
              { className: "start-screen__wrap" },
              n.a.createElement(
                "div",
                { className: "start-screen__img-wrap" },
                n.a.createElement("img", { src: w.a, alt: "img" })
              ),
              n.a.createElement(
                "div",
                { className: "start-screen__content-wrap" },
                n.a.createElement(
                  "h1",
                  { className: "start-screen__title" },
                  "Who wants to be a\xa0millionaire?"
                ),
                n.a.createElement(
                  "div",
                  { className: "start-screen__button-wrap" },
                  n.a.createElement(N, { text: "Start", changeStatus: t })
                )
              )
            )
          );
        },
        b = a(14),
        h = a(15),
        S = a(11),
        y = [
          {
            text:
              "\u0414\u0436\u0430\u043a\u0430\u0440\u0442\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0442\u043e\u043b\u0438\u0446\u0435\u0439 \u043a\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u044b?",
            value: 500,
            answers: [
              {
                text: " \u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u044f",
                value: !0,
              },
              { text: "\u0418\u043d\u0434\u0438\u044f", value: !1 },
              {
                text: "\u0412\u0435\u043d\u0435\u0441\u0443\u044d\u043b\u0430",
                value: !1,
              },
              {
                text: "\u0410\u0432\u0442\u0440\u0430\u043b\u0438\u044f",
                value: !1,
              },
            ],
          },
          {
            text:
              "\u0421\u0442\u043e\u043b\u0438\u0446\u0430 \u042d\u0444\u0438\u043e\u043f\u0438\u0438?",
            value: 500,
            answers: [
              { text: "\u0410\u043a\u043a\u0440\u0430", value: !1 },
              {
                text: "\u041c\u043e\u0433\u0430\u0434\u0438\u0448\u043e",
                value: !1,
              },
              { text: "\u041c\u043e\u0441\u043a\u0432\u0430", value: !0 },
              {
                text:
                  "\u0410\u0434\u0434\u0438\u0441-\u0410\u0431\u0435\u0431\u0430",
                value: !0,
              },
            ],
          },
          {
            text:
              "\u041a\u0430\u043a\u043e\u0439 \u043d\u0430\u043f\u0438\u0442\u043e\u043a \u0438\u0437 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u043d\u0438\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0414\u0430\u0439\u043a\u0438\u0440\u0438?",
            value: 1e3,
            answers: [
              { text: "\u0412\u0438\u0441\u043a\u0438", value: !1 },
              { text: "\u0414\u0436\u0438\u043d", value: !0 },
              { text: "\u0420\u043e\u043c", value: !0 },
              { text: "\u041a\u043e\u043d\u044c\u044f\u043a", value: !1 },
            ],
          },
          {
            text:
              "\u041a\u0430\u043a\u0430\u044f \u0438\u0437 \u044d\u0442\u0438\u0445 \u0441\u0435\u043c\u0435\u0439 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u0428\u0435\u043a\u0441\u043f\u0438\u0440\u043e\u0432\u0441\u043a\u043e\u0439 \u0420\u043e\u043c\u0435\u043e \u0438 \u0414\u0436\u0443\u043b\u044c\u0435\u0442\u0442\u0435?",
            value: 2e3,
            answers: [
              {
                text: "\u0420\u043e\u043c\u0430\u043d\u043e\u0432\u044b",
                value: !1,
              },
              {
                text: "\u041a\u0430\u043f\u0443\u043b\u0435\u0442\u0442\u0438",
                value: !0,
              },
              { text: "\u041a\u0430\u043c\u0431\u0435\u043b\u044b", value: !1 },
              {
                text: "\u0421\u0438\u0434\u043e\u0440\u043e\u0432\u044b",
                value: !1,
              },
            ],
          },
          {
            text:
              "\u041a\u0430\u043a\u043e\u0439 \u0441\u0442\u043e\u043b\u044f\u0440 \u0441\u043e\u0437\u0434\u0430\u043b \u041f\u0438\u043d\u043e\u043a\u043a\u0438\u043e?",
            value: 4e3,
            answers: [
              { text: "\u041f\u0435\u043f\u0435", value: !1 },
              {
                text:
                  "\u0427\u0430\u0440\u043b\u0438 \u0411\u0440\u0430\u0443\u043d",
                value: !1,
              },
              {
                text: "\u0414\u0436\u0435\u043f\u0435\u0442\u0442\u043e",
                value: !0,
              },
              {
                text: "\u041f\u0430\u043f\u0430 \u041a\u0430\u0440\u043b\u043e",
                value: !1,
              },
            ],
          },
          {
            text:
              "\u041a\u0442\u043e \u0442\u0430\u043a\u043e\u0439 \u0413\u0430\u043c\u043b\u0435\u0442?",
            value: 8e3,
            answers: [
              {
                text:
                  "\u041a\u043e\u0440\u043e\u043b\u044c \u0428\u0432\u0435\u0446\u0438\u0438",
                value: !1,
              },
              {
                text:
                  "\u041a\u043e\u0440\u043e\u043b\u044c \u0414\u0430\u043d\u0438\u0438",
                value: !1,
              },
              {
                text:
                  "\u041f\u0440\u0438\u043d\u0446 \u0428\u0432\u0435\u0446\u0438\u0438",
                value: !1,
              },
              {
                text:
                  "\u041f\u0440\u0438\u043d\u0446 \u0414\u0430\u043d\u0438\u0438",
                value: !0,
              },
            ],
          },
          {
            text:
              "\u041a\u0442\u043e \u043e\u0442\u043a\u0440\u044b\u043b \u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044e, \u043a\u043e\u0433\u0434\u0430 \u0443\u0432\u0438\u0434\u0435\u043b \u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0435 \u044f\u0431\u043b\u043e\u043a\u043e?",
            value: 16e3,
            answers: [
              {
                text:
                  "\u0427\u0430\u0440\u043b\u044c\u0437 \u0414\u0430\u0440\u0432\u0438\u043d",
                value: !1,
              },
              {
                text:
                  "\u0418\u0441\u0430\u0430\u043a \u041d\u044c\u044e\u0442\u043e\u043d",
                value: !0,
              },
              {
                text: "\u041c\u0430\u0440\u0438\u044f \u041a\u044e\u0440\u0438",
                value: !1,
              },
              {
                text:
                  "\u0410\u043b\u044c\u0431\u0435\u0440\u0442 \u042d\u0439\u043d\u0448\u0442\u0435\u0439\u043d",
                value: !1,
              },
            ],
          },
          {
            text:
              "\u0413\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u041c\u043e\u043c\u0431\u0430\u0441\u0430?",
            value: 32e3,
            answers: [
              { text: "\u041a\u0435\u043d\u0438\u044f", value: !0 },
              { text: "\u042d\u0444\u0438\u043e\u043f\u0438\u044f", value: !1 },
              { text: "\u041c\u0430\u0440\u043e\u043a\u043a\u043e", value: !1 },
              { text: "\u0418\u043d\u0434\u0438\u044f", value: !1 },
            ],
          },
          {
            text:
              "\u0412 \u043a\u0430\u043a\u043e\u043c \u0432\u0438\u0434\u0435 \u0441\u043f\u043e\u0440\u0442\u0430 \u043f\u0440\u043e\u0441\u043b\u0430\u0432\u0438\u043b\u0441\u044f \u0422\u043e\u043c \u0411\u0440\u044d\u0434\u0438?",
            value: 61e3,
            answers: [
              {
                text:
                  "\u0410\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0438\u0439 \u0424\u0443\u0442\u0431\u043e\u043b",
                value: !0,
              },
              { text: "\u0420\u0435\u0433\u0431\u0438", value: !1 },
              { text: "\u0420\u0435\u0433\u0433\u0438", value: !1 },
              {
                text:
                  "\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430",
                value: !1,
              },
            ],
          },
          {
            text:
              "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u0440\u0430\u0441\u043d\u044b\u0445 \u0438 \u0431\u0435\u043b\u044b\u0445 \u043f\u043e\u043b\u043e\u0441\u043e\u043a \u043d\u0430 \u0430\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u043c \u0444\u043b\u0430\u0433\u0435?",
            value: 125e3,
            answers: [
              { text: "15", value: !1 },
              { text: "20", value: !1 },
              { text: "13", value: !0 },
              { text: "3", value: !1 },
            ],
          },
          {
            text:
              "\u0414\u0440\u0435\u0432\u043d\u0438\u0435 \u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0438\u043d\u0434\u0443\u0438\u0437\u043c\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u043d\u0430:",
            value: 25e4,
            answers: [
              { text: "\u0418\u0432\u0440\u0438\u0442", value: !1 },
              {
                text:
                  "\u0410\u0440\u0430\u0431\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a",
                value: !1,
              },
              {
                text: "\u0421\u0430\u043d\u0441\u043a\u0440\u0438\u0442",
                value: !0,
              },
              {
                text:
                  "\u041f\u0435\u0440\u0441\u0438\u0434\u0441\u043a\u0438\u0439",
                value: !1,
              },
            ],
          },
          {
            text:
              "\u0421\u044c\u0435\u0440\u0440\u0430-\u041b\u0435\u043e\u043d\u0435 - \u0441\u0442\u0440\u0430\u043d\u0430 \u0432:",
            value: 5e5,
            answers: [
              { text: "\u0410\u043c\u0435\u0440\u0438\u043a\u0435", value: !1 },
              { text: "\u0410\u0437\u0438\u0438", value: !1 },
              { text: "\u0410\u0444\u0440\u0438\u043a\u0435", value: !0 },
              { text: "\u0415\u0432\u0440\u043e\u043f\u0435", value: !1 },
            ],
          },
        ],
        O = function (e) {
          var t = e.letter,
            a = e.text,
            r = e.onClick,
            s = e.value;
          return n.a.createElement(
            "button",
            { type: "button", className: "reply-button" },
            n.a.createElement(
              "svg",
              {
                onClick: r,
                viewBox: "0 0 405 72",
                className: "reply-button__wrap",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                value: s,
              },
              n.a.createElement("path", {
                d:
                  "M38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5H356.948C360.648 0.5 364.122 2.28016 366.283 5.28344L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344Z",
                fill: "white",
                className: "reply-border reply-overlay",
              }),
              n.a.createElement("path", {
                d: "M388 36H405",
                className: "reply-border",
              }),
              n.a.createElement("path", {
                d: "M0 36H17",
                className: "reply-border",
              }),
              n.a.createElement(
                "text",
                { fill: "#FF8B37", className: "reply-letter" },
                n.a.createElement("tspan", { x: "45.7637", y: "43.7727" }, t)
              ),
              n.a.createElement(
                "text",
                { fill: "#1C1C21", className: "reply-text" },
                n.a.createElement("tspan", { x: "71", y: "43.7727" }, a)
              )
            )
          );
        },
        C = function (e) {
          var t = e.text,
            a = e.isActive,
            r = e.passed,
            s = a ? "rate-score--active" : "";
          return n.a.createElement(
            "svg",
            {
              width: "376",
              height: "40",
              viewBox: "0 0 376 40",
              className: "rate-score ".concat(s),
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n.a.createElement("path", {
              d: "M69 20H0",
              className: "rate-score__border",
            }),
            n.a.createElement("path", {
              d: "M376 20H307",
              className: "rate-score__border",
            }),
            n.a.createElement("path", {
              d:
                "M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z",
              fill: "white",
              className: "rate-score__border",
            }),
            n.a.createElement(
              "text",
              {
                fill: r ? "#d0d0d8" : "#000000",
                className: "rate-score__text",
              },
              n.a.createElement("tspan", { x: "149.777", y: "26.7727" }, t)
            )
          );
        };
      var L = function (e) {
          var t = e.ratesList,
            a = e.currentStep;
          return n.a.createElement(
            "div",
            { className: "score" },
            n.a.createElement(
              "div",
              { className: "score__wrap" },
              t.map(function (e, t) {
                return n.a.createElement(
                  "div",
                  { className: "score__wrap-svg", key: e },
                  n.a.createElement(C, {
                    text: "$".concat(e),
                    isActive: a === t,
                    passed: a > t,
                  })
                );
              })
            )
          );
        },
        T = function (e) {
          return String.fromCharCode(65 + e);
        },
        j = {
          changeStatus: function (e) {
            return { type: x, payload: { status: e } };
          },
          goNextStep: function () {
            return { type: p };
          },
          setGameOver: function (e) {
            return { type: E, payload: { score: e } };
          },
        },
        k = function (e) {
          return e
            .reduce(function (e, t) {
              var a = t.value,
                r = e.length ? e[e.length - 1] + a : a;
              return e.push(r), e;
            }, [])
            .map(function (e) {
              return e.toLocaleString("en-US", { maximumFractionDigits: 2 });
            });
        },
        H = function (e, t, a) {
          e.classList.add(t),
            setTimeout(function () {
              e && e.classList.remove(t), a();
            }, 1500);
        },
        M = Object(l.b)(
          function (e) {
            var t = e.step;
            return { currentQuestion: y[t], step: t };
          },
          function (e) {
            return {
              changeStep: function () {
                e(j.goNextStep());
              },
              gameOver: function (t) {
                e(j.setGameOver(t));
              },
            };
          }
        )(function (e) {
          var t = e.gameOver,
            a = e.changeStep,
            s = e.step,
            c = e.currentQuestion,
            l = Object(r.useState)(!1),
            u = Object(h.a)(l, 2),
            o = u[0],
            m = u[1],
            v = Object(r.useMemo)(function () {
              return k(y);
            }, []),
            i = Object(r.useCallback)(
              function (e, r) {
                var n = e.currentTarget;
                if (r) {
                  H(
                    n,
                    "valid",
                    s === y.length - 1
                      ? function () {
                          return t(v[s]);
                        }
                      : a
                  );
                } else {
                  var c = [0].concat(Object(b.a)(v))[s];
                  H(n, "invalid", function () {
                    return t(c);
                  });
                }
              },
              [a, v, t, s]
            );
          return n.a.createElement(
            "div",
            { className: "game-screen" },
            n.a.createElement(
              "div",
              { className: "game-screen__content" },
              n.a.createElement(
                "div",
                { className: "game-screen__question" },
                n.a.createElement(
                  "h1",
                  { className: "game-screen__title" },
                  c.text
                )
              ),
              n.a.createElement(
                "div",
                { className: "game-screen__answers" },
                c.answers.map(function (e, t) {
                  return n.a.createElement(
                    "div",
                    { className: "game-screen__answers-wrap", key: t },
                    n.a.createElement(O, {
                      letter: T(t),
                      text: e.text,
                      onClick: function (t) {
                        return i(t, e.value);
                      },
                      value: e.value,
                    })
                  );
                })
              )
            ),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                "button",
                {
                  type: "button",
                  className: "score-visible",
                  onClick: function () {
                    m(!o);
                  },
                },
                o ? n.a.createElement(S.b, null) : n.a.createElement(S.a, null)
              )
            ),
            n.a.createElement(
              "div",
              {
                className: o
                  ? "game-screen__score active"
                  : "game-screen__score",
              },
              n.a.createElement(L, { ratesList: v, currentStep: s })
            )
          );
        }),
        A = function (e) {
          var t = e.onStart,
            a = e.score;
          return n.a.createElement(
            "div",
            { className: "over-screen" },
            n.a.createElement(
              "div",
              { className: "over-screen__wrap" },
              n.a.createElement(
                "div",
                { className: "over-screen__img-wrap" },
                n.a.createElement("img", { src: w.a, alt: "img" })
              ),
              n.a.createElement(
                "div",
                { className: "over-screen__content-wrap" },
                n.a.createElement(
                  "div",
                  { className: "over-screen__score" },
                  "Total score:"
                ),
                n.a.createElement(
                  "h1",
                  { className: "over-screen__title" },
                  "$".concat(a),
                  " earned"
                ),
                n.a.createElement(
                  "div",
                  { className: "over-screen__button-wrap" },
                  n.a.createElement(N, { text: "Try again", changeStatus: t })
                )
              )
            )
          );
        };
      var G = Object(l.b)(
        function (e) {
          return { status: e.status, score: e.score };
        },
        function (e) {
          return {
            startGame: function () {
              e(j.changeStatus(o));
            },
          };
        }
      )(function (e) {
        var t = e.status,
          a = e.startGame,
          r = e.score;
        return t === o
          ? n.a.createElement(M, null)
          : t === m
          ? n.a.createElement(A, { onStart: a, score: r })
          : n.a.createElement(g, { onStart: a });
      });
      var I = function () {
        return n.a.createElement(l.a, { store: d }, n.a.createElement(G, null));
      };
      c.a.render(
        n.a.createElement(n.a.StrictMode, null, n.a.createElement(I, null)),
        document.getElementById("root")
      );
    },
    5: function (e, t, a) {
      e.exports = a.p + "../media/hand.f8c75481.png";
    },
  },
  [[16, 1, 2]],
]);
//# sourceMappingURL=main.c9254feb.chunk.js.map
