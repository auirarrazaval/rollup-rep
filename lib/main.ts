import './style.scss';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';

/**
 * Multiple TODOs in this file, that summarize the current state of the library.
 * - So far, the only thing that has worked for exposing the types needed for the components is
 *   to export them from the components themselves. I don't know if this is the best way to do it,
 *   but it works for now. Further research is needed. Another issue that arises from this is that
 *   I don't know how tree-shaking will work with this approach. Maybe we need to export the types
 *   in separate lines, so that they can be tree-shaken (Not sure if this is actually how it works).
 */
/*                                 Atoms                                            */
// Buttons
export { default as TImage } from './components/TImage.vue';
export type { TImageProps } from './components/TImage.vue';