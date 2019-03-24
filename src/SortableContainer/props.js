import PropTypes from 'prop-types';
import invariant from 'invariant';

import defaultGetHelperDimensions from './defaultGetHelperDimensions';
import defaultShouldCancelStart from './defaultShouldCancelStart';

export const propTypes = {
  axis: PropTypes.oneOf(['x', 'y', 'xy']),
  contentWindow: PropTypes.any,
  disableAutoscroll: PropTypes.bool,
  distance: PropTypes.number,
  dropAnimationDuration: PropTypes.number,
  dropAnimationEasing: PropTypes.string,
  getContainer: PropTypes.func,
  getHelperDimensions: PropTypes.func,
  helperClass: PropTypes.string,
  helperContainer: PropTypes.oneOfType([
    PropTypes.func,
    typeof HTMLElement === 'undefined'
      ? PropTypes.any
      : PropTypes.instanceOf(HTMLElement),
  ]),
  hideSortableGhost: PropTypes.bool,
  lockAxis: PropTypes.string,
  lockOffset: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  ]),
  lockToContainerEdges: PropTypes.bool,
  onSortEnd: PropTypes.func,
  onSortMove: PropTypes.func,
  onSortOver: PropTypes.func,
  onSortStart: PropTypes.func,
  pressDelay: PropTypes.number,
  pressThreshold: PropTypes.number,
  shouldCancelStart: PropTypes.func,
  transitionDuration: PropTypes.number,
  updateBeforeSortStart: PropTypes.func,
  useDragHandle: PropTypes.bool,
  useWindowAsScrollContainer: PropTypes.bool,
};

export const defaultProps = {
  axis: 'y',
  disableAutoscroll: false,
  distance: 0,
  dropAnimationDuration: 250,
  dropAnimationEasing: 'cubic-bezier(0.19, 1, 0.1, 1)',
  getHelperDimensions: defaultGetHelperDimensions,
  hideSortableGhost: true,
  lockOffset: '50%',
  lockToContainerEdges: false,
  pressDelay: 0,
  pressThreshold: 5,
  shouldCancelStart: defaultShouldCancelStart,
  transitionDuration: 300,
  useWindowAsScrollContainer: false,
};

export const omittedProps = Object.keys(propTypes);

export function validateProps(props) {
  invariant(
    !(props.distance && props.pressDelay),
    'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.',
  );
}