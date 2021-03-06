import { FormikHelpers } from 'formik';

/**
 * Submit payload
 */
type SubmitPayload<V, M = null> = {
  /**
   * Submitted values
   */
  values: V;

  /**
   * Optional meta
   */
  meta?: M;
} & FormikHelpers<V>;

export { SubmitPayload };
