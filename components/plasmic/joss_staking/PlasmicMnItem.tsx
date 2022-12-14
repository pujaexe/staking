// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6jdiTgRhkYQJ2zXFv6Yaw9
// Component: OUU_m6iRfO
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_joss_staking.module.css"; // plasmic-import: 6jdiTgRhkYQJ2zXFv6Yaw9/projectcss
import sty from "./PlasmicMnItem.module.css"; // plasmic-import: OUU_m6iRfO/css

export type PlasmicMnItem__VariantMembers = {
  isActive: "isActive";
};

export type PlasmicMnItem__VariantsArgs = {
  isActive?: SingleBooleanChoiceArg<"isActive">;
};

type VariantPropType = keyof PlasmicMnItem__VariantsArgs;
export const PlasmicMnItem__VariantProps = new Array<VariantPropType>(
  "isActive"
);

export type PlasmicMnItem__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicMnItem__ArgsType;
export const PlasmicMnItem__ArgProps = new Array<ArgPropType>("children");

export type PlasmicMnItem__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultMnItemProps {
  children?: React.ReactNode;
  isActive?: SingleBooleanChoiceArg<"isActive">;
  className?: string;
}

function PlasmicMnItem__RenderFunc(props: {
  variants: PlasmicMnItem__VariantsArgs;
  args: PlasmicMnItem__ArgsType;
  overrides: PlasmicMnItem__OverridesType;

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
        sty.root,
        { [sty.rootisActive]: hasVariant(variants, "isActive", "isActive") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox___8Snwh, {
          [sty.freeBoxisActive___8SnwhGinG5]: hasVariant(
            variants,
            "isActive",
            "isActive"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__wJvT7, {
            [sty.freeBoxisActive__wJvT7GinG5]: hasVariant(
              variants,
              "isActive",
              "isActive"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Dashboard",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildrenisActive]: hasVariant(
                variants,
                "isActive",
                "isActive"
              )
            })
          })}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMnItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMnItem__VariantsArgs;
    args?: PlasmicMnItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMnItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMnItem__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicMnItem__ArgProps,
          internalVariantPropNames: PlasmicMnItem__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMnItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMnItem";
  } else {
    func.displayName = `PlasmicMnItem.${nodeName}`;
  }
  return func;
}

export const PlasmicMnItem = Object.assign(
  // Top-level PlasmicMnItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicMnItem
    internalVariantProps: PlasmicMnItem__VariantProps,
    internalArgProps: PlasmicMnItem__ArgProps
  }
);

export default PlasmicMnItem;
/* prettier-ignore-end */
