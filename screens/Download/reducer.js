import constants from './constants';

// helpers
import { isObjectEmpty } from '../../helpers';

const INITIAL_STATE = {
  document: {},
  current_level_section: {
    Title: 'Wallet',
  },
  current_suggest_section: {},
};

export default (state = INITIAL_STATE, action) => {
  let tmp_current_level_section;


  let tmp_current_suggest_section;


  let tmp_suggest_parent_node;

  switch (action.type) {
    case constants.DX_SCROLL_W:

      if (!isObjectEmpty(state.document)) {
        tmp_current_level_section = Object.assign({}, find_node_by_node(state.document, state.current_level_section.SectionGUID));
        // 1. update the completion of progress bar
        tmp_current_level_section.Completion = action.payload.completion;
        tmp_current_level_section.IsBottom = action.payload.isBottom;
        return {
          ...state,
          current_level_section: tmp_current_level_section,
        };
      }
      // GO TO FEEDBACK PAGE
      return {
        ...state,
      };


    case constants.DX_BROWSER_W:

      tmp_current_level_section = Object.assign({}, action.payload.document);
      // 1. update the content section completed
      update_level_content_complete(find_node_by_node(action.payload.document, tmp_current_level_section.SectionGUID));
      update_level_content_complete(tmp_current_level_section);
      // 2. update parent level section completed
      update_parent_level_section_complete(tmp_current_level_section, action.payload.document);
      // 3. find the suggest section
      update_suggest_section(tmp_current_level_section);
      tmp_current_suggest_section = find_next_suggest(tmp_current_level_section, tmp_current_level_section.SectionGUID);
      // 4. update current level section
      tmp_current_level_section = find_node_by_node(action.payload.document, tmp_current_level_section.SectionGUID);

      if (!tmp_current_suggest_section) {
        tmp_current_suggest_section = {
          Type: 'FEEDBACK',
          Title: 'CONTINUE TO FEEDBACK',
          IsCompleted: action.payload.document.IsFeedbackCompleted,
        };
      }

      return {
        ...state,
        document: action.payload.document,
        current_level_section: tmp_current_level_section,
        current_suggest_section: tmp_current_suggest_section,
      };

    case constants.DX_BROWSER_BACK_W:

      // 1. feed current section
      tmp_current_level_section = {
        Title: 'Wallet',
      };
      return {
        ...state,
        document: {},
        current_level_section: tmp_current_level_section,
      };

    case constants.DX_SECTION_BROWSER_W:

      tmp_current_level_section = Object.assign({}, action.payload.current_level_section);
      // 1. update the content section completed
      update_level_content_complete(find_node_by_node(state.document, tmp_current_level_section.SectionGUID));
      update_level_content_complete(tmp_current_level_section);
      // 2. update parent level section completed
      update_parent_level_section_complete(tmp_current_level_section, state.document);
      // 3. find the suggest section
      update_suggest_section(tmp_current_level_section);
      tmp_current_suggest_section = find_next_suggest(state.document, tmp_current_level_section.SectionGUID);
      // 4. update current level section
      tmp_current_level_section = find_node_by_node(state.document, tmp_current_level_section.SectionGUID);

      if (!tmp_current_suggest_section) {
        tmp_current_suggest_section = {
          Type: 'FEEDBACK',
          Title: 'CONTINUE TO FEEDBACK',
          IsCompleted: state.document.IsFeedbackCompleted,
        };
      }

      return {
        ...state,
        current_level_section: tmp_current_level_section,
        current_suggest_section: tmp_current_suggest_section,
      };

    case constants.DX_SECTION_BROWSER_BACK_W:

      // 1. find parent level section
      tmp_current_level_section = find_parent_node_by_child_node(state.document, state.current_level_section.SectionGUID);
      update_level_content_complete(find_node_by_node(state.document, tmp_current_level_section.SectionGUID));
      update_level_content_complete(tmp_current_level_section);
      // 2. update parent level section completed
      update_parent_level_section_complete(tmp_current_level_section, state.document);
      // 3. find the suggest section
      update_suggest_section(tmp_current_level_section);
      tmp_current_suggest_section = find_next_suggest(state.document, tmp_current_level_section.SectionGUID);
      // 4. update current level section
      tmp_current_level_section = find_node_by_node(state.document, tmp_current_level_section.SectionGUID);

      if (!tmp_current_suggest_section) {
        tmp_current_suggest_section = {
          Type: 'FEEDBACK',
          Title: 'CONTINUE TO FEEDBACK',
          IsCompleted: state.document.IsFeedbackCompleted,
        };
      }

      return {
        ...state,
        current_level_section: tmp_current_level_section,
        current_suggest_section: tmp_current_suggest_section,
      };

    case constants.DX_FEED_BACK_W:

      // 1. feed back current section
      tmp_current_level_section = {
        SectionGUID: state.document.SectionGUID,
        Type: 'FEEDBACK',
        Title: 'FEEDBACK',
      };
      tmp_current_suggest_section = {
        SectionGUID: state.document.SectionGUID,
        Title: 'THANK YOU',
      };
      return {
        ...state,
        document: {},
        current_level_section: tmp_current_level_section,
        current_suggest_section: tmp_current_suggest_section,
      };

    case constants.DX_FEED_BACK_COMPLETE_W:
      // 1. feed back current section
      tmp_current_level_section = {
        Title: 'Wallet',
      };
      return {
        ...state,
        current_level_section: tmp_current_level_section,
      };

    case constants.DX_SECTION_SUGGEST_BROWSER_W:

      // 1. Check which level currently in
      tmp_current_level_section = state.current_level_section;
      tmp_current_suggest_section = state.current_suggest_section;
      tmp_suggest_parent_node = find_parent_node_by_child_node(state.document, tmp_current_suggest_section.SectionGUID);

      if (tmp_suggest_parent_node.IsRoot
                && !tmp_current_level_section.IsRoot) { // go the top menu
        tmp_current_level_section = Object.assign({}, state.document);
        // 1. update the content section completed
        update_level_content_complete(find_node_by_node(state.document, tmp_current_level_section.SectionGUID));
        update_level_content_complete(tmp_current_level_section);
        // 2. update parent level section completed
        update_parent_level_section_complete(tmp_current_level_section, state.document);
        // 3. find the suggest section
        update_suggest_section(tmp_current_level_section);
        tmp_current_suggest_section = find_next_suggest(state.document, tmp_current_level_section.SectionGUID);
        // 4. update current level section
        tmp_current_level_section = find_node_by_node(state.document, tmp_current_level_section.SectionGUID);

        if (!tmp_current_suggest_section) {
          tmp_current_suggest_section = {
            Type: 'FEEDBACK',
            Title: 'CONTINUE TO FEEDBACK',
            IsCompleted: state.document.IsFeedbackCompleted,
          };
        }
      } else { // go the suggestion
        tmp_current_level_section = Object.assign({}, state.current_suggest_section);
        // 1. update the content section completed
        update_level_content_complete(find_node_by_node(state.document, tmp_current_level_section.SectionGUID));
        update_level_content_complete(tmp_current_level_section);
        // 2. update parent level section completed
        update_parent_level_section_complete(tmp_current_level_section, state.document);
        // 3. find the suggest section
        update_suggest_section(tmp_current_level_section);
        tmp_current_suggest_section = find_next_suggest(state.document, tmp_current_level_section.SectionGUID);
        // 4. update current level section
        tmp_current_level_section = find_node_by_node(state.document, tmp_current_level_section.SectionGUID);

        if (!tmp_current_suggest_section) {
          tmp_current_suggest_section = {
            Type: 'FEEDBACK',
            Title: 'CONTINUE TO FEEDBACK',
            IsCompleted: state.document.IsFeedbackCompleted,
          };
        }
      }

      return {
        ...state,
        current_level_section: tmp_current_level_section,
        current_suggest_section: tmp_current_suggest_section,
      };

    default:
      return state;
  }
};


// FUNCTION
const find_parent_node_by_child_node = (currentNode, id) => {
  let i; let currentChild; let
    result;
  if (currentNode.Sections) {
    for (i = 0; i < currentNode.Sections.length; i += 1) {
      currentChild = currentNode.Sections[i];
      if (currentChild.SectionGUID == id) {
        return currentNode;
      }
    }
    for (i = 0; i < currentNode.Sections.length; i += 1) {
      currentChild = currentNode.Sections[i];
      result = find_parent_node_by_child_node(currentChild, id);

      if (result) {
        return result;
      }
    }
  } else {
    return false;
  }
};

const find_node_by_node = (currentNode, id) => {
  let i; let currentChild; let
    result;
  if (currentNode.SectionGUID == id) {
    return currentNode;
  }
  if (!currentNode.Sections) {
    return false;
  }
  for (i = 0; i < currentNode.Sections.length; i += 1) {
    currentChild = currentNode.Sections[i];
    result = find_node_by_node(currentChild, id);
    if (result) {
      return result;
    }
  }
};

const update_level_content_complete = (current_level_section) => {
  for (let i = 0; i < current_level_section.Sections.length; i++) {
    const section = current_level_section.Sections[i];
    if (section.IsContent) {
      section.IsCompleted = true;
    }
    current_level_section.Sections[i] = section;
  }
};

const update_parent_level_section_complete = (current_level_section, document) => {
  let all_completed = true;
  for (let i = 0; i < current_level_section.Sections.length; i++) {
    const section = current_level_section.Sections[i];
    if (!section.IsCompleted) {
      all_completed = false;
    }
  }
  if (all_completed) {
    const currentNode = find_node_by_node(document, current_level_section.SectionGUID);
    currentNode.IsCompleted = true;

    const parentNode = find_parent_node_by_child_node(document, current_level_section.SectionGUID);
    if (parentNode) {
      update_parent_level_section_complete(parentNode, document);
    }
  }
};

const update_suggest_section = (current_level_section) => {
  if (!current_level_section.Sections) {
    return;
  }
  const dataArr = current_level_section.Sections;
  for (let i = 0; i < dataArr.length; i++) {
    const section = dataArr[i];
    if (!section.IsCompleted) {
      section.IsRecommended = true;
      break;
    }
  }
  current_level_section.Sections = dataArr;
};

const find_next_suggest = (document, id) => {
  let result = false;
  let parentNode;
  const currentNode = find_node_by_node(document, id);
  if (!currentNode.Sections) {
    return false;
  }
  for (let i = 0; i < currentNode.Sections.length; i++) {
    if (!currentNode.Sections[i].IsCompleted) {
      result = true;
      return currentNode.Sections[i];
    }
  }
  if (!result) {
    parentNode = find_parent_node_by_child_node(document, id);
    if (parentNode) {
      return find_next_suggest(document, parentNode.SectionGUID);
    }
    // Completed
    return false;
  }
};
