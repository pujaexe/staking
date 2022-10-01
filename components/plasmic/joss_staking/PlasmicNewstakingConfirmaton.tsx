// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6jdiTgRhkYQJ2zXFv6Yaw9
// Component: e4UkvTDdSpi
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: KhBkDGlzke/component
import Menubar from "../../Menubar"; // plasmic-import: bkX_qKyhqs/component
import MnItem from "../../MnItem"; // plasmic-import: OUU_m6iRfO/component
import NewstakingPopup from "../../NewstakingPopup"; // plasmic-import: 6NrxLI77CT/component
import Footer from "../../Footer"; // plasmic-import: oeSuO0WaA0/component
import Button from "../../Button"; // plasmic-import: FFfCEbgxQ4u/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_joss_staking.module.css"; // plasmic-import: 6jdiTgRhkYQJ2zXFv6Yaw9/projectcss
import sty from "./PlasmicNewstakingConfirmaton.module.css"; // plasmic-import: e4UkvTDdSpi/css

import ArrowBackSvgrepoComsvgIcon from "./icons/PlasmicIcon__ArrowBackSvgrepoComsvg"; // plasmic-import: d52nSnJ8C_/icon
import CloseSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__CloseSvgrepoCom1Svg"; // plasmic-import: WAhl40R9vo/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: zbgdUCmYfRL/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: OLfCWCE5DNn/icon

export type PlasmicNewstakingConfirmaton__VariantMembers = {};

export type PlasmicNewstakingConfirmaton__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewstakingConfirmaton__VariantsArgs;
export const PlasmicNewstakingConfirmaton__VariantProps =
  new Array<VariantPropType>();

export type PlasmicNewstakingConfirmaton__ArgsType = {
  productImage?: React.ReactNode;
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicNewstakingConfirmaton__ArgsType;
export const PlasmicNewstakingConfirmaton__ArgProps = new Array<ArgPropType>(
  "productImage",
  "children",
  "slot"
);

export type PlasmicNewstakingConfirmaton__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  contentWrapper?: p.Flex<"section">;
  content?: p.Flex<"div">;
  head?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  menubar?: p.Flex<typeof Menubar>;
  mnItem?: p.Flex<typeof MnItem>;
  newstakingPopup?: p.Flex<typeof NewstakingPopup>;
  footer?: p.Flex<typeof Footer>;
  modalConfirmation?: p.Flex<"div">;
  dialogConfirmation?: p.Flex<"div">;
  dialogHeader?: p.Flex<"div">;
  h4?: p.Flex<"h4">;
  dialogBody?: p.Flex<"div">;
  h5?: p.Flex<"h5">;
  poduct?: p.Flex<"div">;
  title?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
  rules?: p.Flex<"div">;
  dialogFooter?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultNewstakingConfirmatonProps {}

function PlasmicNewstakingConfirmaton__RenderFunc(props: {
  variants: PlasmicNewstakingConfirmaton__VariantsArgs;
  args: PlasmicNewstakingConfirmaton__ArgsType;
  overrides: PlasmicNewstakingConfirmaton__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <p.Stack
            as={"section"}
            data-plasmic-name={"contentWrapper"}
            data-plasmic-override={overrides.contentWrapper}
            hasGap={true}
            className={classNames(projectcss.all, sty.contentWrapper)}
          >
            <div
              data-plasmic-name={"content"}
              data-plasmic-override={overrides.content}
              className={classNames(projectcss.all, sty.content)}
            >
              <div
                data-plasmic-name={"head"}
                data-plasmic-override={overrides.head}
                className={classNames(projectcss.all, sty.head)}
              >
                <div className={classNames(projectcss.all, sty.column__svv09)}>
                  {true ? (
                    <p.Stack
                      as={p.PlasmicLink}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__vjykT
                      )}
                      component={Link}
                      href={`/`}
                      platform={"nextjs"}
                    >
                      <ArrowBackSvgrepoComsvgIcon
                        className={classNames(projectcss.all, sty.svg__lJLy)}
                        role={"img"}
                      />

                      <h1
                        data-plasmic-name={"h1"}
                        data-plasmic-override={overrides.h1}
                        className={classNames(
                          projectcss.all,
                          projectcss.h1,
                          projectcss.__wab_text,
                          sty.h1
                        )}
                      >
                        {"New Staking"}
                      </h1>
                    </p.Stack>
                  ) : null}
                </div>

                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.column___9CGz)}
                  >
                    <Menubar
                      data-plasmic-name={"menubar"}
                      data-plasmic-override={overrides.menubar}
                      className={classNames("__wab_instance", sty.menubar)}
                      dashboard={
                        <p.PlasmicLink
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link__zn0Eh
                          )}
                          component={Link}
                          href={`/`}
                          platform={"nextjs"}
                        >
                          <MnItem
                            data-plasmic-name={"mnItem"}
                            data-plasmic-override={overrides.mnItem}
                            className={classNames("__wab_instance", sty.mnItem)}
                            isActive={true}
                          >
                            {"Dashboard"}
                          </MnItem>
                        </p.PlasmicLink>
                      }
                    />
                  </div>
                ) : null}
              </div>

              <NewstakingPopup
                data-plasmic-name={"newstakingPopup"}
                data-plasmic-override={overrides.newstakingPopup}
                className={classNames("__wab_instance", sty.newstakingPopup)}
              />
            </div>
          </p.Stack>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />

          <div
            data-plasmic-name={"modalConfirmation"}
            data-plasmic-override={overrides.modalConfirmation}
            className={classNames(projectcss.all, sty.modalConfirmation)}
          >
            <div
              data-plasmic-name={"dialogConfirmation"}
              data-plasmic-override={overrides.dialogConfirmation}
              className={classNames(projectcss.all, sty.dialogConfirmation)}
            >
              <div
                data-plasmic-name={"dialogHeader"}
                data-plasmic-override={overrides.dialogHeader}
                className={classNames(projectcss.all, sty.dialogHeader)}
              >
                <h4
                  data-plasmic-name={"h4"}
                  data-plasmic-override={overrides.h4}
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4
                  )}
                >
                  {"New Staking Confirmation"}
                </h4>

                <CloseSvgrepoCom1SvgIcon
                  className={classNames(projectcss.all, sty.svg__uvJ8Z)}
                  role={"img"}
                />
              </div>

              <p.Stack
                as={"div"}
                data-plasmic-name={"dialogBody"}
                data-plasmic-override={overrides.dialogBody}
                hasGap={true}
                className={classNames(projectcss.all, sty.dialogBody)}
              >
                <h5
                  data-plasmic-name={"h5"}
                  data-plasmic-override={overrides.h5}
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5
                  )}
                >
                  {"Order Details :"}
                </h5>

                {true ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"poduct"}
                    data-plasmic-override={overrides.poduct}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.poduct)}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: (
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__vxrrY)}
                          displayHeight={"90px" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"90px" as const}
                          loading={"lazy" as const}
                          src={{
                            src: "/plasmic/joss_staking/images/wariorpng.png",
                            fullWidth: 90,
                            fullHeight: 90,
                            aspectRatio: undefined
                          }}
                        />
                      ),

                      value: args.productImage
                    })}

                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"title"}
                      data-plasmic-override={overrides.title}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.title)}
                    >
                      <h3
                        data-plasmic-name={"h3"}
                        data-plasmic-override={overrides.h3}
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          sty.h3
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__qOqQ
                          )}
                        >
                          {p.renderPlasmicSlot({
                            defaultContents: "Warior Staking",
                            value: args.children,
                            className: classNames(sty.slotTargetChildren)
                          })}
                        </div>
                      </h3>

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__iJWph
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__jvg4Q
                          )}
                        >
                          {p.renderPlasmicSlot({
                            defaultContents: "👍 Low Risk",
                            value: args.slot,
                            className: classNames(sty.slotTargetSlot)
                          })}
                        </div>
                      </div>
                    </p.Stack>
                  </p.Stack>
                ) : null}

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"rules"}
                  data-plasmic-override={overrides.rules}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.rules)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__lkZzx)}
                  >
                    <label
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.label__nJsda
                      )}
                    >
                      {"Potfolio Name"}
                    </label>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pe6JX
                      )}
                    >
                      {"Personal INvestment"}
                    </div>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox__aojlp)}
                  >
                    <label
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.label__itJtF
                      )}
                    >
                      {"Profit Distribution Date"}
                    </label>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__esGhE
                      )}
                    >
                      {"2022/08/28"}
                    </div>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox__h0Tem)}
                  >
                    <label
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.label__lgwZp
                      )}
                    >
                      {"Profit Received"}
                    </label>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__aOGA
                      )}
                    >
                      {"Daily"}
                    </div>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox__emmDy)}
                  >
                    <label
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.label__fIwY6
                      )}
                    >
                      {"POL Fees"}
                    </label>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__phEz8
                      )}
                    >
                      {"8%"}
                    </div>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox__qt4BU)}
                  >
                    <label
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.label__amKSq
                      )}
                    >
                      {"Total"}
                    </label>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rlULc
                      )}
                    >
                      {"100 USDT"}
                    </div>
                  </div>
                </p.Stack>
              </p.Stack>

              <div
                data-plasmic-name={"dialogFooter"}
                data-plasmic-override={overrides.dialogFooter}
                className={classNames(projectcss.all, sty.dialogFooter)}
              >
                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  buttonId={"" as const}
                  className={classNames("__wab_instance", sty.button)}
                  color={"blue" as const}
                  link={`/portfolio`}
                  shape={"rounded" as const}
                >
                  {"Confirm"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "contentWrapper",
    "content",
    "head",
    "h1",
    "menubar",
    "mnItem",
    "newstakingPopup",
    "footer",
    "modalConfirmation",
    "dialogConfirmation",
    "dialogHeader",
    "h4",
    "dialogBody",
    "h5",
    "poduct",
    "title",
    "h3",
    "rules",
    "dialogFooter",
    "button"
  ],
  navbar: ["navbar"],
  contentWrapper: [
    "contentWrapper",
    "content",
    "head",
    "h1",
    "menubar",
    "mnItem",
    "newstakingPopup"
  ],
  content: ["content", "head", "h1", "menubar", "mnItem", "newstakingPopup"],
  head: ["head", "h1", "menubar", "mnItem"],
  h1: ["h1"],
  menubar: ["menubar", "mnItem"],
  mnItem: ["mnItem"],
  newstakingPopup: ["newstakingPopup"],
  footer: ["footer"],
  modalConfirmation: [
    "modalConfirmation",
    "dialogConfirmation",
    "dialogHeader",
    "h4",
    "dialogBody",
    "h5",
    "poduct",
    "title",
    "h3",
    "rules",
    "dialogFooter",
    "button"
  ],
  dialogConfirmation: [
    "dialogConfirmation",
    "dialogHeader",
    "h4",
    "dialogBody",
    "h5",
    "poduct",
    "title",
    "h3",
    "rules",
    "dialogFooter",
    "button"
  ],
  dialogHeader: ["dialogHeader", "h4"],
  h4: ["h4"],
  dialogBody: ["dialogBody", "h5", "poduct", "title", "h3", "rules"],
  h5: ["h5"],
  poduct: ["poduct", "title", "h3"],
  title: ["title", "h3"],
  h3: ["h3"],
  rules: ["rules"],
  dialogFooter: ["dialogFooter", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  contentWrapper: "section";
  content: "div";
  head: "div";
  h1: "h1";
  menubar: typeof Menubar;
  mnItem: typeof MnItem;
  newstakingPopup: typeof NewstakingPopup;
  footer: typeof Footer;
  modalConfirmation: "div";
  dialogConfirmation: "div";
  dialogHeader: "div";
  h4: "h4";
  dialogBody: "div";
  h5: "h5";
  poduct: "div";
  title: "div";
  h3: "h3";
  rules: "div";
  dialogFooter: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewstakingConfirmaton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewstakingConfirmaton__VariantsArgs;
    args?: PlasmicNewstakingConfirmaton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewstakingConfirmaton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNewstakingConfirmaton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNewstakingConfirmaton__ArgProps,
          internalVariantPropNames: PlasmicNewstakingConfirmaton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNewstakingConfirmaton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewstakingConfirmaton";
  } else {
    func.displayName = `PlasmicNewstakingConfirmaton.${nodeName}`;
  }
  return func;
}

export const PlasmicNewstakingConfirmaton = Object.assign(
  // Top-level PlasmicNewstakingConfirmaton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    contentWrapper: makeNodeComponent("contentWrapper"),
    content: makeNodeComponent("content"),
    head: makeNodeComponent("head"),
    h1: makeNodeComponent("h1"),
    menubar: makeNodeComponent("menubar"),
    mnItem: makeNodeComponent("mnItem"),
    newstakingPopup: makeNodeComponent("newstakingPopup"),
    footer: makeNodeComponent("footer"),
    modalConfirmation: makeNodeComponent("modalConfirmation"),
    dialogConfirmation: makeNodeComponent("dialogConfirmation"),
    dialogHeader: makeNodeComponent("dialogHeader"),
    h4: makeNodeComponent("h4"),
    dialogBody: makeNodeComponent("dialogBody"),
    h5: makeNodeComponent("h5"),
    poduct: makeNodeComponent("poduct"),
    title: makeNodeComponent("title"),
    h3: makeNodeComponent("h3"),
    rules: makeNodeComponent("rules"),
    dialogFooter: makeNodeComponent("dialogFooter"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicNewstakingConfirmaton
    internalVariantProps: PlasmicNewstakingConfirmaton__VariantProps,
    internalArgProps: PlasmicNewstakingConfirmaton__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewstakingConfirmaton;
/* prettier-ignore-end */
