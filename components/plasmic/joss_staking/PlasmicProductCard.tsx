// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6jdiTgRhkYQJ2zXFv6Yaw9
// Component: 7imsr4jILL
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
import Button from "../../Button"; // plasmic-import: FFfCEbgxQ4u/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_joss_staking.module.css"; // plasmic-import: 6jdiTgRhkYQJ2zXFv6Yaw9/projectcss
import sty from "./PlasmicProductCard.module.css"; // plasmic-import: 7imsr4jILL/css

import UsdtSvgrepoComsvgIcon from "./icons/PlasmicIcon__UsdtSvgrepoComsvg"; // plasmic-import: Tj7RwiE503/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: zbgdUCmYfRL/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: OLfCWCE5DNn/icon

export type PlasmicProductCard__VariantMembers = {};

export type PlasmicProductCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicProductCard__VariantsArgs;
export const PlasmicProductCard__VariantProps = new Array<VariantPropType>();

export type PlasmicProductCard__ArgsType = {
  children?: React.ReactNode;
  productImage?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicProductCard__ArgsType;
export const PlasmicProductCard__ArgProps = new Array<ArgPropType>(
  "children",
  "productImage",
  "slot"
);

export type PlasmicProductCard__OverridesType = {
  root?: p.Flex<"div">;
  cardWrapper?: p.Flex<"div">;
  header?: p.Flex<"div">;
  title?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
  body?: p.Flex<"div">;
  item?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  item3?: p.Flex<"div">;
  cta?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultProductCardProps {
  children?: React.ReactNode;
  productImage?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function PlasmicProductCard__RenderFunc(props: {
  variants: PlasmicProductCard__VariantsArgs;
  args: PlasmicProductCard__ArgsType;
  overrides: PlasmicProductCard__OverridesType;

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
      {true ? (
        <div
          data-plasmic-name={"cardWrapper"}
          data-plasmic-override={overrides.cardWrapper}
          className={classNames(projectcss.all, sty.cardWrapper)}
        >
          {true ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              hasGap={true}
              className={classNames(projectcss.all, sty.header)}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___0NUxa)}
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
                  className={classNames(projectcss.all, projectcss.h3, sty.h3)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__tLjj)}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: "Warior Staking",
                      value: args.children,
                      className: classNames(sty.slotTargetChildren)
                    })}
                  </div>
                </h3>

                <div className={classNames(projectcss.all, sty.freeBox__iSgz5)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__z5PPw)}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: "???? Low Risk",
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
            data-plasmic-name={"body"}
            data-plasmic-override={overrides.body}
            hasGap={true}
            className={classNames(projectcss.all, sty.body)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"item"}
              data-plasmic-override={overrides.item}
              hasGap={true}
              className={classNames(projectcss.all, sty.item)}
            >
              <span
                className={classNames(
                  projectcss.all,
                  projectcss.span,
                  projectcss.__wab_text,
                  sty.span__vF8Kc
                )}
              >
                {"Min. Deposit"}
              </span>

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___1LCXq)}
                >
                  <UsdtSvgrepoComsvgIcon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg)}
                    role={"img"}
                  />

                  <span
                    className={classNames(
                      projectcss.all,
                      projectcss.span,
                      projectcss.__wab_text,
                      sty.span__k9YkE
                    )}
                  >
                    {"100.000"}
                  </span>
                </p.Stack>
              ) : null}
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"item3"}
              data-plasmic-override={overrides.item3}
              hasGap={true}
              className={classNames(projectcss.all, sty.item3)}
            >
              <span
                className={classNames(
                  projectcss.all,
                  projectcss.span,
                  projectcss.__wab_text,
                  sty.span__nvLxC
                )}
              >
                {"Est. APY"}
              </span>

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___8Et4Q)}
                >
                  <span
                    className={classNames(
                      projectcss.all,
                      projectcss.span,
                      projectcss.__wab_text,
                      sty.span__kwuSr
                    )}
                  >
                    {"+50%"}
                  </span>
                </p.Stack>
              ) : null}
            </p.Stack>
          </p.Stack>

          <div
            data-plasmic-name={"cta"}
            data-plasmic-override={overrides.cta}
            className={classNames(projectcss.all, sty.cta)}
          >
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              buttonId={"stakeButton" as const}
              className={classNames("__wab_instance", sty.button)}
              color={"softBlue" as const}
              link={`/newstaking`}
              onClick={"" as const}
              shape={"rounded" as const}
            >
              {"Stake Now"}
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "cardWrapper",
    "header",
    "title",
    "h3",
    "body",
    "item",
    "svg",
    "item3",
    "cta",
    "button"
  ],
  cardWrapper: [
    "cardWrapper",
    "header",
    "title",
    "h3",
    "body",
    "item",
    "svg",
    "item3",
    "cta",
    "button"
  ],
  header: ["header", "title", "h3"],
  title: ["title", "h3"],
  h3: ["h3"],
  body: ["body", "item", "svg", "item3"],
  item: ["item", "svg"],
  svg: ["svg"],
  item3: ["item3"],
  cta: ["cta", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  cardWrapper: "div";
  header: "div";
  title: "div";
  h3: "h3";
  body: "div";
  item: "div";
  svg: "svg";
  item3: "div";
  cta: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductCard__VariantsArgs;
    args?: PlasmicProductCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProductCard__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicProductCard__ArgProps,
          internalVariantPropNames: PlasmicProductCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicProductCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCard";
  } else {
    func.displayName = `PlasmicProductCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCard = Object.assign(
  // Top-level PlasmicProductCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cardWrapper: makeNodeComponent("cardWrapper"),
    header: makeNodeComponent("header"),
    title: makeNodeComponent("title"),
    h3: makeNodeComponent("h3"),
    body: makeNodeComponent("body"),
    item: makeNodeComponent("item"),
    svg: makeNodeComponent("svg"),
    item3: makeNodeComponent("item3"),
    cta: makeNodeComponent("cta"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicProductCard
    internalVariantProps: PlasmicProductCard__VariantProps,
    internalArgProps: PlasmicProductCard__ArgProps
  }
);

export default PlasmicProductCard;
/* prettier-ignore-end */
